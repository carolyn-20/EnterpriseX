# EnterpriseX — Integrated ERP (Educational Implementation)

EnterpriseX is a modular ERP demo that connects procurement, vendor management, goods receipt, inventory, sales, invoicing, payments, approvals, finance, audit, and reporting.

> **Scope notice:** This is a learning/demo implementation using synthetic data. It is not certified accounting software and is not suitable for real financial transactions. Several integrations are simulated.

## Quick start (Docker)
1. Install Docker Desktop and start it.
2. Copy `.env.example` to `.env` (the defaults are for local development only).
3. From this folder run: `docker compose up --build`
4. Open **http://localhost:3000**. API docs: **http://localhost:4000/api/docs**. Python reports: **http://localhost:8000/docs**.
5. Login demo credentials: `admin@enterprisex.local` / `EnterpriseX123!` (change before any shared deployment).

Stop: `docker compose down`. Keep DB data: `docker compose down` (volume persists). Reset: `docker compose down -v` (deletes demo data).

## Local development
- API: `cd services/api && npm install && npm run dev`
- Reports: `cd services/reports && python -m venv .venv`; activate; `pip install -r requirements.txt`; `uvicorn app.main:app --reload --port 8000`
- Web: `cd apps/web && npm install && npm run dev`
- PostgreSQL and Redis must be available. Set environment variables from root `.env.example`.

## Modules
- Dashboard; procurement/vendors/purchase orders; goods receipts and inventory; sales orders; invoices and payments; approvals; chart of accounts and journals; audit; reporting.
- API endpoints use Express + PostgreSQL. Reporting is a separate FastAPI service. Redis is included for queue/cache infrastructure; this demo does not require Redis for core CRUD.

## Test commands
- API: `cd services/api && npm test`
- Reports: `cd services/reports && pytest -q`
- Web: `cd apps/web && npm test`
- Compose health: `docker compose ps`

## Demo workflow
1. Log in.
2. Create a vendor and product (or use seeded examples).
3. Create a purchase order, approve it, then record a goods receipt to increase stock.
4. Create a sales order and fulfill it to reduce stock and generate an invoice.
5. Record a payment and inspect finance/reporting/audit pages.

## Architecture
Next.js UI → Express REST API → PostgreSQL. FastAPI report service queries PostgreSQL independently for aggregate reporting. Redis is available for future asynchronous jobs. Compose provides isolated service networking and persistent database storage.

## Assessment mapping
See `docs/ASSESSMENT_MAP.md` for all 15 assessments and evidence/implementation notes. `docs/API.md`, `docs/ARCHITECTURE.md`, `docs/DEMO_SCRIPT.md`, `docs/LIMITATIONS.md` are included.
