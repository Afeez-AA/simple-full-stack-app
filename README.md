
# Simple Full Stack App

## Description
This project is a full-stack web application built using Node.js and React, with PostgreSQL as the database. The backend is developed with Express.js, providing a RESTful API that the frontend can consume. This application allows users to interact with a database, offering features like checking database status and other CRUD operations.

## Features
- User-friendly interface powered by React.
- RESTful API built with Express.js.
- PostgreSQL database for data persistence.

## Prerequisites
- **Node.js**: v14 or higher
- **PostgreSQL**: v12 or higher
- **Git**: v2 or higher
- **Docker and Docker compose**

## Installation

### Deploying Locally Without Docker

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/simple-full-stack-app.git
   cd simple-full-stack-app
   ```

2. **Set Up the Backend**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Create a `.env` file:
     ```bash
     cp .env.example .env
     ```
   - Edit the `.env` file with your preferred text editor and fill in the required database connection values:
     ```plaintext
     DB_HOST=localhost
     DB_USER=your_DB_user
     DB_PASSWORD=your_DB_password
     DB_DB=your_DB_db
     DB_PORT=5432
     FRONTEND_URL=http://localhost:3000
     ```
   - Install the backend dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Set Up the Frontend**:
   - Open a new terminal tab and navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Create a `.env` file:
     ```bash
     cp .env.example .env
     ```
   - Edit the `.env` file to set the backend URL:
     ```plaintext
     REACT_APP_BACKEND_URL=http://localhost:3001
     ```
   - Install the frontend dependencies:
     ```bash
     npm install
     ```
   - Start the frontend application:
     ```bash
     npm start
     ```

### Deploying with Docker

You can also run the application using Docker. Make sure you have Docker and Docker Compose installed on your machine.

1. **Build and Start the Application**:
   - Ensure your environment variables are set in the `.env` files located in both the `backend` and `frontend` directories.
   - In the root directory of your project, run:
     ```bash
     docker-compose up --build
     ```

2. **Access the Application**:
   - Open your web browser and navigate to `http://localhost:3000` to access the frontend. The backend will be available at `http://localhost:3001/api/db-status`.


## Notes
- Remember to replace the placeholders in the `.env` files with your actual values.
- Ensure PostgreSQL is running with necessary credentials locally if you are deploying without Docker.
