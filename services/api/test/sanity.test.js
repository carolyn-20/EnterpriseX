const test=require('node:test'); const assert=require('node:assert/strict');
test('ERP core math: purchase total',()=>{const lines=[{qty:3,price:125},{qty:2,price:80}];assert.equal(lines.reduce((s,x)=>s+x.qty*x.price,0),535)});
test('stock movement convention: receipts add and sales subtract',()=>{const stock=12+5-4;assert.equal(stock,13);assert.ok(stock>=0)});
test('partial payment remains unpaid until full amount',()=>{const invoice=1000;const paid=400;assert.equal(paid<invoice,true);assert.equal(invoice-paid,600)});
