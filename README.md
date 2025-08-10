# Node.js TypeScript Blog Backend

A RESTful API backend for a blog application built with Node.js, Express, TypeScript, and MongoDB using the repository pattern.

## Project Structure

```
├── src/
│   ├── config/          # Configuration files
│   ├── constants/       # Constant definitions
│   ├── controllers/     # Request handlers
│   ├── interfaces/      # TypeScript interfaces
│   ├── middlewares/     # Express middlewares
│   ├── models/          # Mongoose models
│   ├── repositories/    # Data access layer
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   ├── validations/     # Input validation rules
│   └── server.ts        # App entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## Technologies Used

- Node.js
- TypeScript
- Express.js
- MongoDB with Mongoose
- Repository Pattern
- Cors
- Dotenv

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/blog_db
   NODE_ENV=development
   ```

### Running the Application

Development mode:

```
npm run dev
```

Build the project:

```
npm run build
```

Start the production server:

```
npm start
```

## API Endpoints

### Posts

- GET /api/posts - Get all posts
- GET /api/posts/:id - Get a post by ID
- POST /api/posts - Create a new post
- PUT /api/posts/:id - Update a post
- DELETE /api/posts/:id - Delete a post

### Users

- GET /api/users - Get all users
- GET /api/users/:id - Get a user by ID
- POST /api/users - Create a new user
- PUT /api/users/:id - Update a user
- DELETE /api/users/:id - Delete a user
