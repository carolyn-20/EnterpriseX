# Database migrations

The initial educational schema is loaded by `database/init.sql` when a new PostgreSQL volume is initialized.
For an iterative/production workflow, replace this bootstrap with versioned migrations (e.g., node-pg-migrate or Prisma migrations), review every schema change, and never rely on container initialization to alter an existing database volume.
