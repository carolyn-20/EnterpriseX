# Incident Simulation Exercises

Use a disposable local database and synthetic data only.

## A — Oversell attempt
Try to fulfill an order whose quantity exceeds stock. Expected: transaction rolls back, stock remains unchanged, no invoice is created, API returns conflict.

## B — Duplicate PO approval
Approve a PO twice. Expected: second request conflicts because the state is no longer pending.

## C — Overpayment
Pay an invoice in two partial payments, then attempt a payment larger than the remaining balance. Expected: transaction rejected, payment totals remain valid.

## D — Database unavailable
Stop the database container and call `/health`. Expected: health responds with degraded status; API routes return safe errors, no stack trace to clients.

Record: incident, reproduction steps, logs, root cause, code change, regression test, prevention.
