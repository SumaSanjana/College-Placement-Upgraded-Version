🎯 Job Portal Application
A full-stack Job Portal Application with three distinct user roles — Student, Recruiter, and Admin — built using JAMstack architecture and a Node.js/Express backend.

🚀 Features
👤 User Roles
Students

Create and manage profiles

Upload resumes (Cloudinary integration)

Browse and apply for jobs

Recruiters

Post new job openings

View applicant profiles

Schedule video interviews (PeerJS)

Make and manage hiring decisions

Admin

Monitor platform insights and system metrics

View usage analytics via an admin dashboard (Mazer)

🛠️ Core Functionalities
User authentication via JWT

Student profile management (personal + academic details)

Resume upload using Cloudinary

Job posting & job application workflow

Real-time video interview scheduling using PeerJS

Admin dashboard with statistics (powered by Mazer UI template)

🧰 Tech Stack
⚙️ Backend
Node.js & Express.js

MongoDB (Database)

Mongoose (ODM)

JWT (Authentication)

Cloudinary (Resume storage)

PeerServer (WebRTC video interview support)

🌐 Frontend (JAMstack)
Next.js (React Framework)

Tailwind CSS (Styling)

Mazer Template (Admin Dashboard UI)

Axios (HTTP Requests)

PeerJS (Video Calls)

📦 Prerequisites
Before running the application, ensure the following tools are installed:

Node.js (v16 or higher)

MongoDB (local or cloud instance)

Cloudinary account (for resume handling)

Git (optional but recommended)

⚙️ Setup Instructions
1. 🔄 Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/job-portal.git
cd job-portal
2. 🧠 Backend Setup
bash
Copy
Edit
cd server
npm install
cp .env.example .env
✏️ Configure the .env file
env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/job-portal
JWT_SECRET=your_jwt_secret_here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
▶️ Start Backend Server
bash
Copy
Edit
npm run dev
3. 💻 Frontend Setup
bash
Copy
Edit
cd ../client
npm install
▶️ Start Frontend Server
bash
Copy
Edit
npm run dev
📞 Contact
For questions, suggestions, or reporting bugs, feel free to reach out:

Sanjana NVS
📧 Email: sanjananvs812@gmail.com
