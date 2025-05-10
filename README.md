# **📘 Postman Collection for Basic Activity Booking App**

This collection contains all the necessary API requests for the “Basic Activity Booking App” backend as part of the **MeetX Backend Developer Internship** assignment.

---

## **🌐 URLs**

- **Live API URL**: [https://meetx-assignment-cjkj.onrender.com](https://meetx-assignment-cjkj.onrender.com)
    
- **GitHub Repository**: [https://github.com/jais-ravi/meetX-assignment.git](https://github.com/jais-ravi/meetX-assignment.git)
    

---

## **🔧 API Endpoints**

### **1\. User Registration API**

**Endpoint:** POST /api/auth/register

**Description:** Registers a new user with name, email, phone, and password. The password is hashed using bcrypt before storing in the database.

#### **Request Body:**

``` json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "9876543210",
  "password": "strongpassword"
}

 ```

#### **Success Response:**

``` json
{
  "_id": "65f12345abc123abc123abc1",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "9876543210"
}

 ```

> Sets a token cookie (HttpOnly, Max-Age: 1 day) 
  

#### **Error Response:**

``` json
{ "message": "Email already registered" }

 ```

---

### **2\. User Login API**

**Endpoint:** POST /api/auth/login

**Description:** Logs in an existing user. Accepts email and password, and returns a JWT token. The token is stored as an HTTP-only cookie.

#### **Request Body:**

``` json
{
  "email": "johndoe@example.com",
  "password": "strongpassword"
}

 ```

#### **Success Response:**

``` json
{
  "_id": "65f12345abc123abc123abc1",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "9876543210"
}

 ```

> Sets a token cookie (HttpOnly) 
  

#### **Error Response:**

``` json
{ "message": "Invalid credentials" }

 ```

---

### **3\. List Activities API (Public)**

**Endpoint:** GET /api/activities

**Description:** Returns a list of available activities such as cricket, movies, football matches, etc.

#### **Success Response:**

``` json
[
  {
    "_id": "65fabc12abc123abc123abc1",
    "title": "Cricket Match",
    "description": "Local tournament final",
    "location": "Stadium A",
    "date": "2025-05-12",
    "time": "16:00"
  },
  {
    "_id": "65fabc34abc123abc123abc2",
    "title": "Movie Night",
    "description": "Watch 'Inception' under the stars",
    "location": "Open Air Theater",
    "date": "2025-05-15",
    "time": "20:00"
  }
]

 ```

---

### **4\. Book an Activity API (Protected)**

**Endpoint:** POST /api/bookings

**Description:** Books an activity for the logged-in user by providing the activityId. User must be authenticated (JWT token required).

#### **Request Body:**

``` json
{
  "activityId": "65fabc12abc123abc123abc1"
}

 ```

#### **Success Response:**

``` json
{ "message": "Activity booked successfully" }

 ```

#### **Error Response:**

``` json
{ "message": "Activity not found" }

 ```

---

### **5\. Get My Bookings API (Protected)**

**Endpoint:** GET /api/bookings/me

**Description:** Returns a list of all bookings made by the logged-in user.

#### **Success Response:**

``` json
[
  {
    "_id": "65faccccabc123abc123aaa1",
    "user": "65f12345abc123abc123abc1",
    "activity": {
      "_id": "65fabc12abc123abc123abc1",
      "title": "Cricket Match",
      "location": "Stadium A",
      "date": "2025-05-12",
      "time": "16:00"
    },
    "bookedAt": "2025-05-10T12:30:00.000Z"
  }
]

 ```

#### **Error Response:**

``` json
{ "message": "Unauthorized" }

 ```

---

## **🔑 Authentication Details**

- **JWT Token**: The token is generated during login or registration and is stored in an **HTTP-only cookie**.
    
- **Protected Routes**: /api/bookings and /api/bookings/me require a valid cookie (JWT).
    

---

## **📦 Submission Checklist**

- ✅ GitHub Repository: [https://github.com/jais-ravi/meetX-assignment.git](https://github.com/jais-ravi/meetX-assignment.git)
    
- ✅ Postman Collection: _(attached with submission)_
    
- ✅ Live API URL: [https://meetx-assignment-cjkj.onrender.com](https://meetx-assignment-cjkj.onrender.com)
    

---

## **🧪 Testing in Postman**

1. **Set the Base URL:**
    
    Use either [http://localhost:8000](http://localhost:8000) for local or the live Render URL in your Postman environment.
    
2. **Login to Get JWT Token:**
    
    Send a request to the login endpoint. The token will be stored in cookies.
    
3. **Access Protected Routes:**
    
    Once logged in, you can test protected APIs (like booking and fetching user bookings) as long as your Postman is set to **retain cookies**.
    

---

## **📝 Conclusion**

This collection documents the full backend API flow for the “Basic Activity Booking App,” including user authentication, public activity listing, and private activity booking. Use the provided endpoints in Postman for easy testing and validation.
