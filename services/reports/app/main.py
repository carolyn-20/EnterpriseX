import os
from fastapi import FastAPI, HTTPException
import psycopg
from psycopg.rows import dict_row
app=FastAPI(title='EnterpriseX Reporting Service',version='1.0.0',description='Educational reporting APIs. Uses synthetic/demo records.')
DB=os.getenv('DATABASE_URL','postgres://erp_user:local_demo_password_change_me@localhost:5432/enterprisex')
def fetch(sql,params=()):
 try:
  with psycopg.connect(DB,row_factory=dict_row) as conn:
   with conn.cursor() as cur: cur.execute(sql,params); return cur.fetchall()
 except Exception as exc: raise HTTPException(status_code=503,detail='Report database unavailable') from exc
@app.get('/health')
def health():
 try: fetch('SELECT 1'); return {'status':'ok'}
 except HTTPException: raise
@app.get('/reports/overview')
def overview():
 return fetch('SELECT (SELECT count(*) FROM products) products,(SELECT count(*) FROM vendors) vendors,(SELECT count(*) FROM purchase_orders) purchase_orders,(SELECT count(*) FROM sales_orders) sales_orders,(SELECT COALESCE(sum(amount),0) FROM invoices) invoiced_total,(SELECT COALESCE(sum(amount),0) FROM payments) paid_total')[0]
@app.get('/reports/stock')
def stock():
 return fetch('SELECT id,sku,name,stock_qty,reorder_level,unit_price,stock_qty*unit_price inventory_value FROM products ORDER BY stock_qty ASC')
@app.get('/reports/sales')
def sales():
 return fetch("SELECT status,count(*) orders,COALESCE(sum(total),0) amount FROM sales_orders GROUP BY status ORDER BY status")
@app.get('/reports/procurement')
def procurement():
 return fetch("SELECT status,count(*) purchase_orders,COALESCE(sum(total),0) amount FROM purchase_orders GROUP BY status ORDER BY status")
@app.get('/reports/finance')
def finance():
 return fetch("SELECT (SELECT COALESCE(sum(amount),0) FROM invoices) invoiced,(SELECT COALESCE(sum(amount),0) FROM payments) collected,(SELECT COALESCE(sum(amount),0) FROM invoices WHERE status='unpaid') outstanding")
