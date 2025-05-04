# 🎯 Job Portal Application

A full-stack **Job Portal Application** with three distinct user roles — **Student**, **Recruiter**, and **Admin** — built using **JAMstack** architecture and a **Node.js/Express** backend.

---

## 🚀 Features

### 👤 User Roles

- **Students**
  - Create and manage profiles
  - Upload resumes (Cloudinary integration)
  - Browse and apply for jobs

- **Recruiters**
  - Post new job openings
  - View applicant profiles
  - Schedule video interviews (PeerJS)
  - Make and manage hiring decisions

- **Admin**
  - Monitor platform insights and system metrics
  - View usage analytics via an admin dashboard (Mazer)

---

### 🛠️ Core Functionalities

- User authentication via **JWT**
- Student profile management (personal + academic details)
- Resume upload using **Cloudinary**
- Job posting & job application workflow
- Real-time video interview scheduling using **PeerJS**
- Admin dashboard with statistics (powered by **Mazer** UI template)

---

## 🧰 Tech Stack

### ⚙️ Backend

- **Node.js** & **Express.js**
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **JWT** (Authentication)
- **Cloudinary** (Resume storage)
- **PeerServer** (WebRTC video interview support)

### 🌐 Frontend (JAMstack)

- **Next.js** (React Framework)
- **Tailwind CSS** (Styling)
- **Mazer Template** (Admin Dashboard UI)
- **Axios** (HTTP Requests)
- **PeerJS** (Video Calls)

---

## 📦 Prerequisites

Before running the application, ensure the following tools are installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Cloudinary](https://cloudinary.com/) account (for resume handling)
- [Git](https://git-scm.com/) (optional but recommended)

---

## ⚙️ Setup Instructions

### 1. 🔄 Clone the Repository

```bash
git clone https://github.com/yourusername/job-portal.git
cd job-portal
