# Marine Data Verse Backend

This is the backend API for Marine Data Verse, built with Node.js and Express.

## Features
- REST API endpoints for marine data
- User authentication (stub)
- AI/ML endpoint (stub)
- PostgreSQL integration
- Docker support
- Environment variable configuration

## Quick Start

### 1. Install dependencies
```bash
cd backend
npm install
```

### 2. Configure environment
Copy `.env.example` to `.env` and update with your database credentials.

### 3. Start the server
```bash
npm run dev
```

### 4. API Endpoints
- `GET /health` — Health check
- `GET /api/marine-data` — Get marine data (demo)
- `POST /api/auth/login` — User login (stub)
- `POST /api/ai/species-identify` — AI/ML endpoint (stub)

### 5. Docker
```bash
docker build -t marine-data-verse-backend .
docker run -p 8000:8000 marine-data-verse-backend
```

## Connect Frontend
Set your frontend `.env.local`:
```
VITE_API_URL=http://localhost:8000
```

## Next Steps
- Implement real authentication
- Add more marine data endpoints
- Integrate real AI/ML models
