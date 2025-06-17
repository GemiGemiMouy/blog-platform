# 📝 Modern Blog Platform

A sleek and responsive blog platform built using **React** and **Tailwind CSS**, featuring:
- Category filtering
- Dark mode toggle
- Markdown-style posts
- Search functionality
- Email contact form (via EmailJS)
- Fully responsive design

## 🔧 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Email Service**: EmailJS
- **Icons**: Heroicons / Remixicons
- **Hosting**: GitHub Pages / Vercel / Netlify (optional)

## 📸 Screenshots

![Homepage Light Mode](./public/screenshots/home-light.png)
![Homepage Dark Mode](./public/screenshots/home-dark.png)

## 🚀 Features

- 🌙 Dark mode / Light mode toggle
- 🗂️ Filter posts by category
- 🔎 Search for posts
- 📬 Contact form integration with EmailJS
- 🧱 Component-based structure (PostCard, DarkModeToggle, etc.)
- 📱 Mobile-friendly and responsive layout

## 📁 Folder Structure

```bash
/src
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PostCard.jsx
│   ├── DarkModeToggle.jsx
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── Category.jsx
│   ├── Contact.jsx
│   └── ...
├── data/
│   └── posts.js
├── App.jsx
└── main.jsx
