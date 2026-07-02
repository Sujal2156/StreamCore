# StreamCore

StreamCore is a Node.js and Express backend for a video platform. It currently covers user auth, profile management, Cloudinary uploads, and watch history, with a structure that is easy to extend as the product grows.

Built as a practical backend project with a focus on clean route protection, reusable middleware, and real-world file handling.

## Features
- User registration and login
- Avatar and cover image upload through Multer + Cloudinary
- JWT-based authentication with protected routes
- Refresh token flow with cookie-based session handling
- Update account details, password, avatar, and cover image
- Channel profile lookup with subscriber count and subscription status
- Watch history populated through MongoDB aggregation
- Clean MVC structure with controllers, routes, models, middlewares, and utils

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Cloudinary
- Multer

## Folder Structure

```
src/
  controllers/
  db/
  middlewares/
  models/
  routes/
  utils/
  app.js
  index.js
public/
```

## Run Locally

1. Clone the repository:

```bash
git clone <your-repo-url>
cd Backend
```

2. Install dependencies and start the server:

```bash
npm install
npm run start
```

The start script uses `nodemon` and loads environment variables from `.env`.

If you want a development workflow, you can add a `dev` script later without changing the app code.

## Environment Variables

Create a `.env` file in the project root and add the values below:

```
PORT=3000
MONGODB_URI=mongodb://<user>:<pass>@host:port/dbname
CORS_ORIGIN=http://localhost:3000
ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=7d
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

## API Endpoints

Base path: `/api/v1/users`

- `POST /register` - register a new user with avatar and optional cover image
- `POST /login` - login with email or username
- `POST /logout` - log out the current user
- `POST /refresh-token` - refresh the access token
- `POST /change-password` - change password for the logged-in user
- `GET /current-user` - fetch the current user profile
- `PATCH /update-account` - update full name and email
- `PATCH /avatar` - update avatar
- `PATCH /cover-image` - update cover image
- `GET /c/:username` - get channel profile details
- `GET /history` - get watch history

## Notes

- Protected routes use JWT verification from cookies or the `Authorization` header.
- Uploads go to Cloudinary, and failed uploads are cleaned up through the utility layer.
- The project is still in progress, so some platform features are not wired up yet.
- The database name used in the code is `videotube`.

## Contributing

Pull requests are welcome. If you plan to change a larger part of the backend, please open an issue first so the direction stays clear.

## Status
In progress.

## License
ISC

## Links
- Repository: your GitHub link here
