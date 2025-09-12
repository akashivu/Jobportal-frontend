# Job Portal - Frontend

Frontend for the **Job Portal application** built with React.js.  
Supports **User** and **Recruiter** roles with secure login, job posting, job search, and application features.  

---

## Features

- JWT Authentication  
- Role-based routing (`RECRUITER`, `USER`)  
- Post, View, and Apply for Jobs  
- Job Search & Filter  
- Responsive UI with React & Tailwind  

---

## Tech Stack

- React.js  
- React Router  
- Axios  
- Bootstrap / Tailwind CSS  

---

##  Folder Structure

- `pages/` – Main pages like Login, Register, Jobs, Dashboard  
- `components/` – Navbar, JobCard, ProtectedRoute, etc.  
- `services/` – Axios API logic  

---

## Auth Flow

1. Login → JWT token saved in **localStorage**  
2. Axios used for backend calls with Authorization headers  
3. Role-based rendering and protected routes  

---

## Screenshots

### Homepage  
![Homepage](./assets/homepage.png)  

###  Login Page  
![Login](./assets/loginpage.png)  

### Recruiter Dashboard  
![Dashboard](./assets/postpage.png)  

---

## 🔗 Key Routes

| Path         | Role       | Description     |
|--------------|-----------|-----------------|
| `/login`     | All       | Login Page      |
| `/register`  | All       | Register Page   |
| `/jobs`      | User      | View Jobs       |
| `/dashboard` | Recruiter | Manage Jobs     |

---

## 🔗 Backend Repository  

 [Job Portal Backend (Spring Boot)](https://github.com/akashivu/Jobportal-backend)  

---

##  Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm start


Akash Patil

GitHub: github.com/akashivu

Email: akashivu002@gmail.com
