# 🧾 Inventory Management System — Whizlabs Programmer Trainee Assessment

This is a full-stack inventory management system built for the Whizlabs assessment. It allows users to **Add**, **Edit**, **View**, and **Delete** inventory items using a modern React frontend, Express backend, and MongoDB Atlas database.

---

## 🚀 Live Demo

- 🔗 **Frontend (Vercel):** [https://inventory-management-whizlabs.vercel.app/]  
- 🔗 **Backend API (Render):** [https://inventory-management-whizlabs.onrender.com/items](https://inventory-management-whizlabs.onrender.com/items)


## 🛠️ Tech Stack

- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas (Cloud)
- **Deployment:** Vercel (frontend) + Render (backend)

---

## ✨ Features

- ✅ Add new inventory items
- ✅ Edit existing items
- ✅ View item details
- ✅ Delete items
- ✅ Smooth popup messages
- ✅ MongoDB cloud storage
- ✅ Scroll to top on action
- ✅ Fully deployed cloud project

---

## 📁 Folder Structure
├── backend/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ └── context/
│ └── package.json
└── README.md

---

## 🧪 API Endpoints

Base URL: `https://inventory-management-whizlabs.onrender.com/items`

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| GET    | `/items`             | Get all items       |
| POST   | `/items`             | Add new item        |
| GET    | `/items/:id`         | Get single item     |
| PUT    | `/items/:id`         | Update an item      |
| DELETE | `/items/:id`         | Delete an item      |

---

## 📝 How to Run Locally

### Backend

```bash
cd backend
npm install
# Create a .env file with MONGO_URI
node server.js

###frontend
cd frontend
npm install
npm start

Mohammed Hussain
BE Computer Science Engineering
Programmer Trainee Assessment (Whizlabs)

---

## 📘 Whizlabs Submission Reflection (Q2–Q11)

### Q2: What is the problem you solved with this project?

This project solves the problem of tracking and managing inventory in small-scale businesses. Users can easily add, view, edit, or delete items in real-time through a cloud-connected web interface.

---

### Q3: What technologies did you use?

- **Frontend:** React.js  
- **Backend:** Node.js, Express  
- **Database:** MongoDB Atlas (cloud)  
- **Deployment:** Vercel (frontend), Render (backend)

---

### Q4: What role did you play in building this project?

I independently developed and deployed the full-stack application — handling everything from UI design to API creation, database connection, and deployment.

---

### Q5: What were the challenges you faced?

- Connecting frontend to backend across domains
- Switching from localhost to Render/Vercel
- Fixing CORS issues
- Ensuring smooth deployment and live testing

---

### Q6: What did you learn while working on this project?

I learned how to:
- Build REST APIs using Express
- Deploy full-stack apps on Vercel and Render
- Integrate cloud databases (MongoDB Atlas)
- Manage component state and context in React

---

### Q7: What would you do differently if you do it again?

I would use a notification library (like Toastify), add validations, and improve UI responsiveness with frameworks like Tailwind or Bootstrap.

---

### Q8: How does your project demonstrate your technical skills?

It shows that I can:
- Build and deploy real-world apps
- Work across full-stack (frontend, backend, DB)
- Solve bugs and configure cloud environments
- Deliver a professional user experience

---

### Q9: How did you test your application?

- Manual testing in both local and live environments  
- Verified API responses using browser and console logs  
- Validated MongoDB entries through Compass and Atlas

---

### Q10: Did you work alone or in a team?

I completed the entire project independently as part of the Whizlabs assessment.

---

### Q11: Any other points you'd like to highlight?

Yes — this project helped me gain confidence in cloud deployment, API design, and full-stack development. I believe it's a strong foundation for future opportunities in software engineering.

---



