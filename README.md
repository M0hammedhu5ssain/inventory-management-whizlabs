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
## 📝 Reflection Note
.Challenges you faced during the project
> While working on the Inventory Management System project, I faced many challenges. At first, I was not familiar with React or Node.js, so it was hard to understand how frontend and backend work together. Setting up the project structure, creating API routes, and connecting MongoDB Atlas also took time to learn. One major challenge was deployment. I had never deployed full-stack apps before, so hosting the backend on Render and frontend on Vercel was a new experience for me. There were also small issues like CORS errors and environment variable setup that I had to solve by searching online and watching tutorials.

.What you learned
>Through this project, I learned many important things. I understood how to create a RESTful API using Express.js and how to manage state using React Context. I learned how to connect a React form to the backend and perform CRUD operations. I also understood how to handle errors and give feedback messages like “Item Added Successfully” or “Item Deleted.” This made the UI more user-friendly.

​What you would do better if given another chance. 
>If I get another chance, I will improve the UI design to make it more professional using tools like Tailwind CSS or Bootstrap. I would also like to add features like search, filters, and user authentication to make the system more complete. Overall, this project helped me grow as a beginner full-stack developer and made me more confident in using new technologies.


## 📘 Whizlabs Submission Reflection (Q2–Q11)

**Q2. What excites you most about programming, even if you're still learning?**  
I feel happy when I use programming to solve real problems. It is exciting to build something useful with code. Every time I fix an error or make something work, I learn something new.

**Q3. Have you tried building anything small on your own — even if it didn’t work out? Tell us about it.**  
Yes, I made a Library Management System in Java and connected it to a database. It didn’t work at first, but I kept trying and solved the issues. I also worked on a project to support specially abled students, which was later published in IEEE.

**Q4. If we give you access to a real-world project, what would be your first approach to start learning and contributing?**  
First, I will try to understand the project by reading files and setup instructions. Then I will run the code on my system. After that, I will look for small bugs or features to work on and ask questions if I don’t understand something.

**Q5. What have you done outside your college curriculum to learn more about coding?**  
I joined the Salesforce virtual internship. I also worked on two research papers — one was published in IEEE and another was presented in ICDS conference. I went to technical workshops and also worked as a volunteer in symposiums to improve my learning and communication skills.

**Q6. Do you ever look at others’ code or projects online (like GitHub, Stack Overflow)?**  
Yes, I check GitHub and Stack Overflow when I face problems in coding. I see how other people write code and fix issues. This helps me understand new ways of solving problems.

**Q7. What have you learned from it? How much time do you spend in a week on coding-related learning or practice? Be honest.**  
I learned how to write clean and simple code, how to fix bugs, and how to solve errors step by step. I spend about 4 to 5 hours in a week on coding and learning new things.

**Q8. Tell us about a time you got stuck trying to learn something technical. What did you do next?**  
I had trouble connecting Java to MySQL database in my Library project. I searched online, watched videos, and changed the settings many times. After trying again and again, I got it to work. I learned to be patient and never give up.

**Q9. Why do you want to work at Whizlabs as an intern? What are you hoping to gain and contribute?**  
I want to work at Whizlabs to gain real experience, work in a team, and learn from experts. I hope to improve my coding skills and also contribute with my hard work, ideas, and dedication.

**Q10. If we ask you to work on a difficult task or debug something for hours, how would you handle it?**  
I will take it as a challenge. I will try different ways to solve it, read documents, and search online. If I still can't solve it, I will ask for help. I believe every problem helps me become a better developer.

**Q11. What makes you different from other freshers applying for a coding role?**  
I have two research papers published, worked on real projects, and joined internships, workshops, and symposiums. I try to learn by doing and always push myself to learn something new, even if it’s difficult.
