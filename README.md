Here is the updated README.md for your GitHub project meetX-assignment with complete API documentation including JSON request/response examples, base URLs, and port info:

⸻


# 🏏 MeetX - Activity Booking App (Backend API)

This is the backend API for the **MeetX Basic Activity Booking App**, developed using **Node.js**, **Express**, and **MongoDB**. It supports user authentication, activity listing, booking, and fetching personal bookings.

---

## 🌐 Hosted URL

**Live API Base URL:**  
[`https://meetx-assignment-cjkj.onrender.com`](https://meetx-assignment-cjkj.onrender.com)

**Localhost Port:**  
`http://localhost:8000`

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose  
- **Authentication**: JWT (stored in HTTP-only cookies)  
- **Validation**: express-validator  
- **Password Hashing**: bcryptjs  
- **API Testing**: Postman

---

## 📦 Folder Structure

/controllers
/models
/routes
/middlewares
/config
server.js

---

## 📋 API Endpoints

---

### **1. Register User**

**Endpoint:** `POST /api/auth/register`  
**Description:** Registers a new user.

#### ✅ Request Body:

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890",
  "password": "strongpassword"
}

✅ Success Response:

{
  "_id": "660ef77d...",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890"
}

❌ Error:

{ "message": "User already exists" }


⸻

2. Login User

Endpoint: POST /api/auth/login
Description: Authenticates user and sets JWT token in HTTP-only cookie.

✅ Request Body:

{
  "email": "johndoe@example.com",
  "password": "strongpassword"
}

✅ Success Response:

{
  "_id": "660ef77d...",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890"
}

✅ Sets cookie:

token=jwt_token; HttpOnly; Max-Age=86400

❌ Error:

{ "message": "Invalid credentials" }


⸻

3. List All Activities (Public)

Endpoint: GET /api/activities
Description: Returns a list of all available activities.

✅ Response:

[
  {
    "_id": "6610be...",
    "title": "Football Match",
    "description": "Friendly football match at local stadium",
    "location": "City Stadium",
    "date": "2025-05-20T00:00:00.000Z",
    "time": "17:00"
  },
  ...
]


⸻

4. Book an Activity (Protected)

Endpoint: POST /api/bookings
Description: Allows logged-in users to book an activity.

✅ Requires authentication (JWT cookie).

✅ Request Body:

{
  "activityId": "6610be4e..."
}

✅ Success Response:

{
  "_id": "6610c04f...",
  "user": "660ef77d...",
  "activity": "6610be4e...",
  "createdAt": "2025-05-10T..."
}

❌ Errors:

{ "message": "Activity not found" }


⸻

5. Get My Bookings (Protected)

Endpoint: GET /api/bookings/me
Description: Fetch all bookings made by the logged-in user.

✅ Requires authentication (JWT cookie).

✅ Success Response:

[
  {
    "_id": "6610c04f...",
    "activity": {
      "_id": "6610be4e...",
      "title": "Football Match",
      "description": "Friendly match",
      "location": "Stadium",
      "date": "2025-05-20T00:00:00.000Z",
      "time": "17:00"
    }
  }
]

❌ If no bookings:

{ "message": "No bookings found" }


⸻

🔐 Authentication & Cookies
	•	JWT is stored in HTTP-only cookie
	•	Cookie is set on login and cleared on logout
	•	Secure routes check for valid token via middleware

⸻

📮 Postman Collection

✅ A complete Postman Collection is included in the repo as MeetX.postman_collection.json.

⸻

🚀 Getting Started Locally

Clone the repo:

git clone https://github.com/jais-ravi/meetX-assignment.git
cd meetX-assignment

Install dependencies:

npm install

Set up .env:

MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret_key

Start the server:

npm run dev
# Runs on http://localhost:8000


⸻

🧪 Test the API
	1.	Import Postman Collection (MeetX.postman_collection.json)
	2.	Use http://localhost:8000 or https://meetx-assignment-cjkj.onrender.com as base URL
	3.	Test each endpoint

⸻

👨‍💻 Author

Ravi Jaiswal
GitHub Profile

⸻

📜 License

This project is part of a hiring assignment for MeetX - Altrodav Technologies Pvt. Ltd..

---

Let me know if you'd like me to generate a `MeetX.postman_collection.json` file based on this.
