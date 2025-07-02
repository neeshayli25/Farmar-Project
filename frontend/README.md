# 🌾 FARmer - Farm Connect Web Application

**FARmer** is a modern, responsive farm produce marketplace built with **React.js** that allows farmers to showcase, manage, and sell their crops online. The platform provides an intuitive interface for farmers to register, log in, post their crops with images, manage inventory, and interact with potential buyers. While the backend is powered by Node.js and MySQL, the heart of the project lies in its **dynamic, user-focused frontend experience**.

---

## 🚀 Features Overview

### ✅ Built with:
- **React.js** (Frontend)
- **React Router DOM** (Client-side routing)
- **Tailwind CSS / Custom CSS** (Styling)
- **Node.js + Express** (Backend API)
- **MySQL** (Database)

---

## 🖥️ Pages & UI Structure

### 🔐 1. **Login Page**
- Simple and clean login interface.
- Username and password fields with validation.
- Login verification through backend.
- Redirects valid users to their respective dashboard (`/farmer`).
- Error message UI for invalid credentials.

### 📝 2. **Signup Page**
- Styled registration form for new users.
- Fields: Name, Email, Password, Phone, Location, Role (Farmer/Buyer).
- New user data is sent to backend and added to MySQL database.
- User feedback shown upon successful registration.
- Redirects to login upon successful signup.

### 🏡 3. **Home Page**
- Central landing page with two animated role selection buttons (Farmer / Buyer).
- Uses internal React state for animation and navigation.
- Includes visual assets (like animated farmer icon) to make it appealing.
- Responsive design for mobile and desktop.

### 🌽 4. **Farmer Dashboard**
- This is the core of the application.
- Clean grid layout showing crops with images, names, prices, and quantity.
- Each crop card includes:
  - **Crop Name**
  - **Image**
  - **Price**
  - **Available Quantity**
  - **Add to Cart** button (interactive)
- Crops are displayed dynamically (can be hardcoded or fetched from backend).

### ➕ 5. **Add Crop Page**
- User-friendly form to post new crops.
- Fields: Crop Name, Image Upload, Price, Quantity, Description.
- Crop data is stored in MySQL using backend API.
- Real-time feedback shown upon successful posting.
- Preview option before submitting.

### 📦 6. **My Crops / Manage Page**
- Lists all crops posted by the logged-in farmer.
- Features:
  - Edit button for each crop (opens editable form).
  - Delete button to remove crop from listing.
- Updates instantly after CRUD operations.

### 🔍 7. **Search / Filter Crops**
- Input bar for real-time searching of crops by name.
- Optional dropdown filters (price range, crop type, availability).
- Results shown dynamically without reload.

### 🛒 8. **Cart Page (Optional for buyers)**
- Shows all added items with quantity.
- Option to remove items or proceed to order.
- Light integration with backend for cart management.

---

## 🛠️ Backend (Brief Overview)
- API built using **Node.js + Express.js**.
- CRUD endpoints for:
  - User registration and login (with password encryption).
  - Crop posting, updating, deleting.
  - Fetching crop data for dashboard and search pages.
- **MySQL** database holds user and crop data.
- Auth integration (JWT or session-based optional).

---

## 📁 Folder Structure

farmer-app/
├── public/
│ └── images/
├── src/
│ ├── components/
│ │ ├── CropCard.jsx
│ │ ├── Navbar.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ ├── Dashboard.jsx
│ │ ├── AddCrop.jsx
│ │ ├── ManageCrops.jsx
│ │ ├── Cart.jsx
│ ├── App.jsx
│ ├── index.js
├── backend/
│ ├── server.js
│ ├── routes/
│ ├── controllers/
│ └── db/
├── package.json
└── README.md


---

## 🧪 Future Improvements

- Role-based dashboards (e.g., for buyers).
- Payment gateway integration.
- Order tracking system.
- Email / SMS notifications.
- Admin panel for crop verification and reports.
- Real-time chat between buyer and farmer.
- Improved animations using Framer Motion.

---

## 🧑‍💻 Developed By

**Team FARM Connect**  
React & Backend Developer: NISHA ALI 
Design Support: NISHA ALI 
Database and API: NISHA ALI


I hve made this project wholy by myself with help of no one and little bit of backend from gpt and this idea is purely mine. 
