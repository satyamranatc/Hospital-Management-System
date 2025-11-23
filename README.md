# Hospital Management System

A comprehensive full-stack MERN application designed to streamline hospital operations. It features a public-facing portal for patients to book appointments, a robust admin dashboard for hospital management, and a dedicated doctor panel.

## Features

- **Patient Portal**:
  - Browse doctors by specialty.
  - Book and manage appointments.
  - User authentication and profile management.
- **Admin Dashboard**:
  - Manage doctors (add, edit, remove).
  - View and manage all appointments.
  - Dashboard statistics.
- **Doctor Panel**:
  - View assigned appointments.
  - Manage profile and availability.

## 🛠️ Tech Stack

**Frontend (User & Admin/Doctor):**
- React 18 + Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify

**Backend:**
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (Image Uploads)

## 🏁 Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running locally (or a MongoDB Atlas URI)

### Installation

1.  **Clone the repository**
2.  **Install Dependencies**
    Run the following command in the root directory to install dependencies for Backend, Frontend, and Admin panels:
    ```bash
    npm install
    npm run install-all
    ```

### Running the Application

Start all three servers (Backend, Frontend, Admin) with a single command:

```bash
npm start
```

- **Backend**: [http://localhost:4000](http://localhost:4000)
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Admin Panel**: [http://localhost:5174](http://localhost:5174)

## 📂 Project Structure

```
./
├── frontend/          # Patient-facing React app
├── admin/             # Admin & Doctor React app
├── backend/           # Express API & Database connection
├── package.json       # Root configuration & scripts
└── README.md          # Project documentation
```
