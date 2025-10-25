## WK 3 README.md


```md
# Week 3 - React, JSX & Tailwind CSS


This repository contains a React + Vite + Tailwind starter for the Week 3 assignment.


## Quick start


1. Install dependencies


```bash
npm install
```


2. Start dev server


```bash
npm run dev
```


3. Open the dev server URL shown by Vite (usually http://localhost:5173)


## What to check


- `src/features/TaskManager.jsx` — implements local storage, add/toggle/delete/filter tasks
- `src/features/PostsList.jsx` — fetches JSONPlaceholder posts, includes search, pagination, loading and error states
- `src/context/ThemeContext.jsx` — theme provider and toggle (applies `dark` class on the root element)
- `src/components/*` — Navbar, Footer, Button, Card, Layout


## Deployment
Use Vercel/Netlify/GitHub Pages. Build with `npm run build` and follow your provider's instructions.


```


---


Save these files into your repository structure and commit the changes. The project satisfies the assignment requirements:


- Vite React project with Tailwind CSS configured
- Reusable components (Button, Card, Navbar, Footer, Layout)
- TaskManager with localStorage persistence, filters, hooks, and state management
- Theme context using useContext and Tailwind dark mode
- API integration (JSONPlaceholder) with loading/error handling, pagination, search, and infinite scroll sentinel
- Responsive design using Tailwind