React + Django Authentication App

Hey there! 👋
This is a full-stack Authentication Application I built using React (with Vite) for the frontend and Django (with Django REST Framework) for the backend. I wanted to explore different ways of handling authentication, so I ended up combining Django Allauth and SimpleJWT to manage user registration, login, and token handling. It’s a fun little project where I got to touch both frontend and backend — and I’m pretty happy with how it turned out!

🏗️ Tech Stack

Frontend

⚛️ React (Vite-powered for super-fast dev experience)
🎨 Basic styling (nothing too fancy, just keeping it clean)

Backend

🐍 Django (with Django REST Framework)
🛂 Django Allauth (for user registration and email login)
🔐 SimpleJWT (for token-based authentication)

Database

🗄️ SQLite3 (kept it simple because it’s just a personal project — easy setup, no hassle)

Security & Cross-Origin

🌐 CORS Headers (so my frontend and backend can talk to each other without yelling about CORS errors)

🚀 Features

✅ User Registration (using Allauth)
✅ User Login (JWT-based with SimpleJWT)
✅ Token Refresh (so you don’t get logged out every 5 minutes)
✅ Full React frontend with clean routing and a decent UI (not a design masterpiece, but it does the job)
✅ Backend API with all the necessary endpoints (register, login, refresh token, etc.)
✅ Proper CORS setup so the React app and Django API can live happily together
✅ Works with SQLite3, so you don’t need to set up any external database — just clone, install, and run

✨What I Learned ?

Setting up Django Allauth with DRF isn’t super straightforward, but once it’s working, it feels powerful.
SimpleJWT makes token handling a lot easier, especially when you need refresh tokens.
React + Vite is blazing fast, and I might use it for more projects.
Getting CORS Headers right is super important when your backend and frontend live on different ports.
