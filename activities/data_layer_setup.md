# Data Layer Setup Activity

The recommended data platform the web portion of the course is:

- [Prisma ORM](https://www.prisma.io/orm)
- [Prisma Postgres](https://www.prisma.io/postgres)

## Activity - Setup Prisma and create an initial schema for your application

1. Use this demo code: [https://github.com/prisma/nextjs-prisma-postgres-demo](https://github.com/prisma/nextjs-prisma-postgres-demo)
2. Follow instructions in the README.md
3. Review the Schema file (the file that defines the database structure): `prisma/schema.prisma`
4. Run the application and view the data and database structure in Prisma Studio
5. Find the queries in the `app` directory and hover over the variables to see the typed data getting returned by the Prisma Client
6. Define your own schema in small steps, running the migration command after each step: `npx prisma migrate dev --name your_migration_name`
