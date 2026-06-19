# StreamCore

Backend API for StreamCore — a simple video streaming platform backend.

## Features
- User authentication (JWT)
- Video upload (Cloudinary)
- Basic subscription and user management


# StreamCore

![status](https://img.shields.io/badge/status-in%20progress-yellow)

Production-grade REST API backend for a video streaming platform, inspired by YouTube's architecture.

## Features
- User registration and login with avatar upload
- Dual-token JWT authentication (Access + Refresh) with secure cookies and token rotation
- Video and thumbnail upload via Multer + Cloudinary with file validation and cleanup on failed uploads
- Subscription system, video like/dislike, comments, and playlist management
- Watch history, subscriber counts and liked-videos powered by MongoDB aggregation pipelines
- MVC architecture with separate controllers, routes, models, and middleware
- Custom `ApiError` class, async wrapper utility, and centralized API response format

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Cloudinary, Multer

## Folder Structure (standard MVC)

```
src/
	controllers/
	models/
	routes/
	middlewares/
	db/
	utils/
	index.js
public/
package.json
README.md
```

## Run locally

1. Clone the repo:

```bash
git clone https://github.com/Sujal2156/StreamCore.git
cd StreamCore
```

2. Install dependencies and start:

```bash
npm install
npm run start
# or (if you add a dev script) `npm run dev`
```

The default `start` script uses `nodemon` and loads environment variables via `dotenv`.

## Environment variables (.env example)

Create a `.env` file at the project root with these variables:

```
PORT=3000
MONGO_URI=mongodb://<user>:<pass>@host:port/dbname
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES=7d
JWT_SECRET=your_jwt_secret
COOKIE_SECURE=true
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
MAX_UPLOAD_SIZE=50mb
```

## API Endpoints (overview)

This is a high-level overview — see the route files under `src/routes` for details.

- Auth
	- `POST /api/auth/register` — register user (avatar upload)
	- `POST /api/auth/login` — login (returns access token + sets refresh cookie)
	- `POST /api/auth/refresh` — rotate refresh token
	- `POST /api/auth/logout` — clear refresh cookie

- Users
	- `GET /api/users/:id` — get user profile
	- `PUT /api/users/:id` — update profile (avatar upload)

- Videos
	- `POST /api/videos` — upload video + thumbnail
	- `GET /api/videos/:id` — video details
	- `GET /api/videos` — list / search videos
	- `POST /api/videos/:id/like` — like/unlike
	- `POST /api/videos/:id/comment` — add comment

- Subscriptions & Playlists
	- `POST /api/users/:id/subscribe` — subscribe/unsubscribe
	- `POST /api/playlists` — create playlist

## Contributing
Pull requests are welcome. Please open issues for discussion before large changes.

## Status
In progress — deployment coming soon.

## License
ISC

## Links
- Repository: https://github.com/Sujal2156/StreamCore
