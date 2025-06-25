# Full Stack AI Chat App (ChatGPT Clone)

This repository contains a full-stack AI chat application similar to ChatGPT, featuring real-time conversation with OpenAI GPT-4 integration, user authentication, chat history, admin panel, rate limiting, and more.

## Tech Stack

- Frontend: React + Next.js + Tailwind CSS + React Context API
- Backend: FastAPI (Python) with WebSocket support
- Database: PostgreSQL with SQLAlchemy ORM
- Authentication: JWT-based
- Deployment: Vercel (frontend), Railway (backend), managed PostgreSQL
- CI/CD: GitHub Actions
- Testing: Pytest (backend), Jest + React Testing Library (frontend), Playwright (E2E)

## Features

- Real-time AI chat interface with typing animation
- User signup/login with JWT authentication
- Chat history saved in database
- Admin dashboard with role-based access
- Rate limiting (100 requests/day/user)
- Light/dark mode toggle
- Markdown and code syntax support in chat
- Logging and error handling
- Dockerized for easy deployment
- OpenAPI documentation for backend API

## Folder Structure

```
chatgpt-clone/
├── client/              # React frontend (Next.js + Tailwind)
│   ├── src/
│   └── public/
├── server/              # FastAPI backend
│   ├── app/
│   ├── tests/
│   └── main.py
├── database/            # Database migration and schema files
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── README.md
├── openapi.json
└── .github/
    └── workflows/       # CI/CD workflows
```

## Setup Instructions

1. Copy `.env.example` to `.env` and fill in your environment variables.
2. Run `docker-compose up --build` to start both frontend and backend.
3. Access frontend at `http://localhost:3000` and backend API at `http://localhost:8000/docs`.
4. Run tests with `pytest` for backend and `npm test` for frontend.

## Deployment Guide

- Frontend deployed on Vercel.
- Backend deployed on Railway.
- PostgreSQL managed via Railway or Supabase.

## API Documentation

Auto-generated OpenAPI docs available at `/docs` endpoint on backend.

## Postman Collection

Included in `postman/` folder for API testing.
