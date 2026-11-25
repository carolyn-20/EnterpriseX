# API quick reference

Base URL: `http://localhost:4000`. Except login and health, endpoints require `Authorization: Bearer <token>`.

| Method | Path | Description |
|---|---|---|
| GET | `/health` | Service/database health |
| POST | `/api/auth/login` | Login `{email,password}` |
| GET | `/api/me` | Current token claims |
| GET | `/api/dashboard` | Dashboard totals |
| GET/POST | `/api/products` | List/create product |
| GET/POST | `/api/vendors` | List/create vendor |
| GET/POST | `/api/purchase-orders` | List/create purchase order |
| POST | `/api/purchase-orders/:id/approve` | Approve pending PO |
| POST | `/api/purchase-orders/:id/receive` | Receive approved PO and increase stock |
| GET/POST | `/api/sales-orders` | List/create sales order |
| POST | `/api/sales-orders/:id/fulfill` | Check stock, decrement, issue invoice |
| GET | `/api/invoices` | List invoices |
| POST | `/api/invoices/:id/payments` | Record payment |
| GET | `/api/payments` | Payment list |
| GET | `/api/approvals` | Pending/previous approval records |
| GET | `/api/accounts` | Chart of accounts |
| GET | `/api/audit` | Audit history |
| GET | `/api/reports/summary` | API summary report |
| GET | `/api/openapi.json` | Starter OpenAPI spec |

FastAPI reports base `http://localhost:8000`: `/reports/overview`, `/reports/stock`, `/reports/sales`, `/reports/procurement`, `/reports/finance`; interactive docs `/docs`.

## Login example
```bash
curl -X POST http://localhost:4000/api/auth/login -H 'Content-Type: application/json' -d '{"email":"admin@enterprisex.local","password":"EnterpriseX123!"}'
```
Use the returned token in the Authorization header.
