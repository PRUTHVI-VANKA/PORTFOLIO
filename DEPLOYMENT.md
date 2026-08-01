# Deployment Instructions

This portfolio website is ready for deployment on Vercel.

## Quick Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure settings
6. Click "Deploy"

## Environment Variables

No environment variables are required for this project.

## Features Implemented

- Fully responsive single-page portfolio
- Horizontal section navigation with smooth left-to-right animations
- Fixed hamburger menu (top-left) for navigation
- Persistent day/night theme toggle (bottom-left) with localStorage
- Night mode: #221426 with animated stars and moon
- Day mode: #F8F8FF with clean light aesthetic
- Slim styled scrollbar
- Bottom navigation arrows for horizontal section movement
- Dynamic content loaded from structured data file
- All sections: Home, Education, Experience, Projects, Contact
- Home page includes personal description, skills, certifications, GitHub, and LinkedIn
- Contact page with email and "View Resume" button
- SEO optimized with proper metadata
- Accessible and mobile-friendly
- Clean, minimal animations using Framer Motion

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

The site is statically exported and ready for deployment.
