# PERN User Registration App

A simple **PERN (PostgreSQL, Express, React, Node.js)** application that allows users to enter their name and email. The backend uses **Prisma ORM** for database interactions.

## Features

- Users can enter their **name** and **email**.
- Data is stored in a **PostgreSQL** database.
- Backend is built with **Express.js** and **Node.js**.
- Frontend is built with **React.js**.
- **Prisma ORM** is used for database queries.

## Installation

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Backend Setup
```sh
cd backend
npm install
```

#### 2.1 Set Up PostgreSQL Database
- Make sure **PostgreSQL** is installed and running.
- Create a database (`user_db` or any name of your choice).

#### 2.2 Configure Prisma
- Create a `.env` file in the `backend` folder and add the following:
```env
DATABASE_URL="postgresql://your-username:your-password@localhost:5432/user_db"
PORT=5000
```
- Initialize Prisma:
```sh
npx prisma migrate dev --name init
```
- Generate Prisma client:
```sh
npx prisma generate
```

#### 2.3 Run the Backend
```sh
npm start
```

---

### 3. Frontend Setup
```sh
cd ../frontend
npm install
npm start
```

---

## API Endpoints

| Method | Endpoint    | Description             |
|--------|------------|-------------------------|
| POST   | /api/users | Add a new user (name, email) |
| GET    | /api/users | Fetch all users |

---

## Tech Stack

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Prisma ORM
- **Other**: dotenv, CORS

---
