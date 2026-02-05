# Slooze Commodities — Backend

REST and GraphQL API for the Slooze Commodities Management System. This backend handles authentication, product inventory operations, and role-based access control. It serves as the data layer for the Slooze frontend application.

---

## Overview

The backend is built with NestJS and exposes:

- **REST** — Login (`POST /auth/login`)
- **GraphQL** — Product queries and mutations, dashboard statistics
- **Auth** — JWT-based authentication with role guards (Manager, Store Keeper)

Data is persisted via Prisma ORM using SQLite. No separate database server is required for local development.

---

## Features

### Authentication
- **Login** — Email/password validation with bcrypt-hashed passwords
- **JWT** — Access tokens with configurable expiration
- **Role-based guards** — Restrict GraphQL operations by user role

### Products (GraphQL)
- **products** — List all products
- **product(id)** — Fetch a single product by ID
- **createProduct(input)** — Create a new product
- **updateProduct(id, input)** — Update an existing product

### Dashboard (GraphQL, Managers Only)
- **dashboardStats** — Aggregate statistics: total products, inventory value, category counts

### Data Model
- **User** — Email, hashed password, role (MANAGER | STORE_KEEPER)
- **Product** — Name, description, category, price, quantity, SKU

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | NestJS 10 |
| **Language** | TypeScript |
| **API** | REST + GraphQL (Apollo) |
| **ORM** | Prisma |
| **Database** | SQLite |
| **Auth** | JWT, Passport, bcrypt |
| **Validation** | class-validator, class-transformer |

---

## Prerequisites

- **Node.js** 18 or higher
- **npm** (or yarn/pnpm)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy the example environment file and adjust if needed:

```bash
cp .env.example .env
```

Required variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | SQLite database path | `file:./dev.db` |
| `JWT_SECRET` | Secret for signing JWTs | `your-secret-key` |
| `PORT` | Server port | `3001` |

### 3. Initialize the database

```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

### 4. Run the server

**Development** (with watch mode):

```bash
npm run start:dev
```

**Production**:

```bash
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3001`.

---

## API Reference

### REST

#### `POST /auth/login`

Request body:
```json
{
  "email": "manager@slooze.xyz",
  "password": "password123"
}
```

Response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "email": "manager@slooze.xyz",
    "name": "Alex Manager",
    "role": "MANAGER"
  }
}
```

### GraphQL

**Endpoint:** `http://localhost:3001/graphql`

**Authentication:** Include the JWT in the `Authorization` header:
```
Authorization: Bearer <access_token>
```

**Example query:**
```graphql
query {
  products {
    id
    name
    category
    price
    quantity
  }
}
```

**Example mutation:**
```graphql
mutation {
  createProduct(input: {
    name: "New Product"
    category: "Agriculture"
    price: 99.99
    quantity: 100
  }) {
    id
    name
  }
}
```

---

## Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma    # Database schema
│   ├── migrations/      # Migration history
│   └── seed.ts          # Seed data (users, products)
├── src/
│   ├── auth/            # Login, JWT strategy, guards
│   ├── products/        # GraphQL resolver, service
│   ├── prisma/          # Prisma module and service
│   ├── common/          # Shared guards and decorators
│   ├── app.module.ts
│   └── main.ts
└── README.md
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run start` | Run compiled application |
| `npm run start:prod` | Run production build |
| `npx prisma generate` | Generate Prisma Client |
| `npx prisma migrate dev` | Run migrations |
| `npx prisma db seed` | Seed database with test data |
| `npx prisma studio` | Open Prisma Studio (DB GUI) |

---

## Seed Data

After running `npx prisma db seed`, the following test accounts are created:

| Role | Email | Password |
|------|-------|----------|
| Manager | manager@slooze.xyz | password123 |
| Store Keeper | storekeeper@slooze.xyz | password123 |

Sample commodity products (e.g., Wheat, Corn, Gold, Coffee) are also seeded.

---

## CORS

The server allows requests from:

- `http://localhost:3000`
- `http://127.0.0.1:3000`
- `http://localhost:3001`
- `http://127.0.0.1:3001`

Adjust CORS settings in `src/main.ts` for production.

---


