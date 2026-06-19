# StreamCore

Backend API for StreamCore — a simple video streaming platform backend.

## Features
- User authentication (JWT)
- Video upload (Cloudinary)
- Basic subscription and user management

## Requirements
- Node.js 18+ and npm
- MongoDB connection

## Environment
Create a `.env` file at the project root with the following variables (example):

- `PORT=3000`
- `MONGO_URI=your_mongo_connection_string`
- `JWT_SECRET=your_jwt_secret`
- `CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME`

## Install & Run
```bash
npm install
npm run start
```

The project uses `nodemon` for development; the `start` script runs `nodemon -r dotenv/config --experimental-json-modules src/index.js`.

## API
See the `src/routes` folder for route definitions; primary routes are under `src/routes/user.routes.js`.

## License
ISC# StreamCore
Production-grade REST API for a video streaming platform | Node.js, Express, MongoDB, JWT, Cloudinary
