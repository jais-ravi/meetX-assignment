# Basic Activity Booking App API

This repository contains the backend implementation for the **Basic Activity Booking App** as part of the **MeetX Backend Developer Internship** assignment. The app allows users to register, log in, view available activities, book activities, and view their bookings.

## Objective

Create a simple REST API backend for a "Basic Activity Booking App", which includes the following functionality:

1. **User Registration & Login**: Users can register and log in to the application.
2. **List Activities**: Available activities (like cricket, movies, football matches, etc.) can be viewed by the users.
3. **Book an Activity**: Logged-in users can book an activity.
4. **Get My Bookings**: Users can retrieve a list of activities they have booked.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB (preferred) or MySQL
- **Authentication**: JWT Token-based Authentication
- **API Testing**: Postman Collection (must be submitted)

## Features

- **User Registration**: User can sign up with a name, email, phone number, and password.
- **User Login**: User can log in using email and password, and receive a JWT token for authenticated requests.
- **Public Activity Listing**: Users can view a list of available activities.
- **Booking Activities**: Users can book activities, and their booking is saved with the user ID.
- **My Bookings**: Users can fetch their previously booked activities.

## Endpoints

### 1. User Registration API

- **Endpoint**: `POST /api/auth/register`
- **Description**: Registers a new user by accepting name, email, phone, and password.
- **Request Body**:
  - `name`: User’s full name
  - `email`: User’s email address
  - `phone`: User’s phone number
  - `password`: User’s password (hashed)

### 2. User Login API

- **Endpoint**: `POST /api/auth/login`
- **Description**: Logs in an existing user and returns a JWT token.
- **Request Body**:
  - `email`: User’s email address
  - `password`: User’s password
- **Response**: Returns user data and sets a JWT token in a secure HTTP-only cookie.

### 3. List Activities API (Public)

- **Endpoint**: `GET /api/activities`
- **Description**: Fetches a list of all available activities.
- **Response**: Returns a list of activities with the following details:
  - `id`
  - `title`
  - `description`
  - `location`
  - `date & time`

### 4. Book an Activity API (Authenticated)

- **Endpoint**: `POST /api/bookings`
- **Description**: Allows users to book an activity by providing the activity ID.
- **Request Body**:
  - `activityId`: ID of the activity to book
- **Response**: Confirmation message stating the activity was successfully booked.

### 5. Get My Bookings API (Authenticated)

- **Endpoint**: `GET /api/bookings/me`
- **Description**: Returns all the bookings made by the logged-in user.
- **Response**: A list of bookings made by the user, with activity details.

## Authentication

- **JWT Authentication**: A JWT token is generated during login and saved as an HTTP-only cookie. This token is required for protected routes (e.g., `POST /api/bookings`).
- **Secured Routes**: Only authenticated users can access routes that require booking and viewing bookings.

## How to Run Locally

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (or MySQL)

### Steps to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/meetx-backend.git
   cd meetx-backend
# meetX-assignment
