# Job Portal - Frontend

Frontend for the Job Portal application built with React.js. Supports user and recruiter roles with secure login, job posting, search, and apply features.

##  Features

- JWT Authentication
- Role-based routing (`RECRUITER`, `USER`)
- Post, View, Apply for Jobs
- Job Search & Filter
- Responsive UI with React

## Tech Stack

- React.js
- React Router
- Axios
- Bootstrap / Tailwind (if used)

## Folder Structure

- `pages/` – Main pages like Login, Register, Jobs, Dashboard
- `components/` – Navbar, JobCard, ProtectedRoute, etc.
- `services/` – Axios API logic

## Auth Flow

- Login -> JWT token saved in localStorage
- Axios used for backend calls with Authorization headers
- Role-based rendering and protected routes

##  Key Routes

| Path            | Role       | Description        |
|-----------------|------------|--------------------|
| `/login`        | All        | Login Page         |
| `/register`     | All        | Register Page      |
| `/jobs`         | User       | View Jobs          |
| `/dashboard`    | Recruiter  | Manage Jobs        |

##  Run Locally

```bash
npm install
npm start

