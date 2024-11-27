# Car Management App

This project is a **Car Management App** that allows users to add cars, view all cars, and toggle a car's favorite status. The app uses **React** for the frontend, **Node.js with Express** for the backend, and **MongoDB Atlas** as the database.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas

## Features

- Add a car to the collection.
- View all cars in the collection.
- Toggle a car's favorite status.
- Data is stored and fetched from MongoDB Atlas.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/HafsaHameed457/Morrent.git
```

## Before doing npm i remove type="module" from server package json after running npm i add it again

- npm i will install dependencies on front-end and backend as well.

- npm start will start both front-end and backend

- To access frontend: http://localhost:5173/

- To access backend: usepostman http://localhost:8000/

APIS LIST:

## API Endpoints

### 1. POST /cars

Api url: http://localhost:8000/cars

- Add a new car to the collection.
- **Request Body**:

  ```json
  {
    "name": "Toyota Corolla",
    "type": "Sedan",
    "price": "$70.00",
    "fuel": "70L",
    "transmission": "Automatic",
    "capacity": "5",
    "car_pic": "bluenew",
    "originalPrice": "$80.00"
  }
  ```

- **Response**:

  ```json

  {
  "res": [...],
  "message": "Car added successfully",
  "success": true
  }
  ```

### 2. GET /cars

Api URL: http://localhost:8000/cars

- **Response**:

  ```json

  {
  "res": [...],
  "message": "Car fetched successfully",
  "success": true
  }
  ```

### 3. POST /cars/favorite

Api url: http://localhost:8000/cars/favorite

- Update favoutite sttaus in db.
- **Request Body**:

  ```json
  {
    "carID": "carID-674750d94afaeecfb1ca1383"
  }
  ```

- **Response**:
  ```json
  {
    "res": {
      "_id": "674750d94afaeecfb1ca1383",
      "name": "Toyota Corolla",
      "type": "Sedan",
      "price": "$70.00",
      "fuel": "70L",
      "transmission": "Automatic",
      "capacity": "5",
      "car_pic": "bluenew",
      "favorite": true,
      "carID": "carID-674750d94afaeecfb1ca1383",
      "__v": 0
    },
    "message": "Favorite status updated",
    "success": true
  }
  ```
