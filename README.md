# Movie Explorer API

A full-stack movie explorer app with a React frontend and NestJS REST API backend, using Prisma and PostgreSQL.

## Prerequisites

- Node.js
- Docker Desktop

## Setup

### 1. Start the database

```bash
docker compose up -d
```

### 2. Backend

```bash
cd backend
npm install
npx prisma migrate dev --name init
npx prisma generate
npx tsx prisma/seed.ts
npm run start:dev
```

Backend runs on `http://localhost:3000`

Swagger docs: `http://localhost:3000/api`

### 3. Frontend

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## API Endpoints

### Movies
- `GET /movies` — list all movies (supports `?search=`, `?sort=`, `?genre=`)
- `GET /movies/:id` — get a single movie
- `POST /movies` — create a movie
- `PATCH /movies/:id` — update a movie
- `DELETE /movies/:id` — delete a movie

### Genres
- `GET /genres` — list all genres
- `GET /genres/:id` — get a single genre
- `POST /genres` — create a genre
- `PATCH /genres/:id` — update a genre
- `DELETE /genres/:id` — delete a genre

### Favorites
- `GET /favorites` — list all favorites
- `POST /favorites` — add a favorite
- `DELETE /favorites/:id` — remove a favorite
