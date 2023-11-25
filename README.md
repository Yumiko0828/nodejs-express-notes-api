# nodejs-express-notes-api

A basic CRUD with Node, Express, Prisma (PostgreSQL) and TypeScript.

# Quick start

1. Create and configure a `.env` file

   ```env
   DATABASE_URL=<your postgre database url>
   ```

2. Install the dependencies

   ```sh
   npm install
   ```

3. Execute a prisma migration command:

   For development:

   ```sh
   npm run prisma:md
   ```

   For production:

   ```sh
   npm run prisma:mp
   ```

4. Run the server:

   For development:

   ```sh
   npm run dev
   ```

   For production:

   ```sh
   npm run build
   npm start
   ```
