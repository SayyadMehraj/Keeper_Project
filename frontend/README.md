<div align="center">

# 📝 Keeper App

**A clean, Google Keep–inspired note-taking app — jot down notes instantly, right in your browser.**

[![React](https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/UI-Material%20UI-007FFF?logo=mui&logoColor=white)](https://mui.com/)

</div>

---

## 📖 About

**Keeper App** is a lightweight, single-page note-taking app built with React. Inspired by Google Keep, it lets you quickly jot down a title and content, add it to your board with a click, and remove notes just as easily — all with instant, in-memory UI updates and a smooth expand/collapse animation on the note-creation form.

---

## ✨ Features

- 🖊️ **Quick note creation** — a minimal textarea that expands into a full title + content form the moment you start typing
- ➕ **Animated add button** — a Material UI floating action button that zooms in once the form expands
- 🗑️ **One-click delete** — remove any note instantly from the board
- ⚛️ **Component-based architecture** — clean separation into `Header`, `CreateArea`, `Note`, and `Footer` components
- 🔄 **Real-time UI updates** — powered entirely by React's `useState` hook, no page reloads
- 🎨 **Simple, responsive styling** — CSS Flexbox layout with Google-Fonts typography (McLaren + Montserrat)

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 17 |
| **Build Tool** | Vite |
| **UI Components** | Material UI (`@mui/material`, `@mui/icons-material`), Emotion |
| **Styling** | CSS Flexbox, Google Fonts |
| **State Management** | React Hooks (`useState`) |

---

## 📁 Project Structure

```
Keeper_Project/
├── index.html
├── public/
│   └── styles.css          # Global styling
└── src/
    ├── index.jsx            # App entry point
    └── components/
        ├── App.jsx           # Root component — holds notes state
        ├── Header.jsx         # App title/header
        ├── CreateArea.jsx      # Expandable note-creation form
        ├── Note.jsx             # Individual note card with delete
        └── Footer.jsx            # Copyright footer
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/SayyadMehraj/Keeper_Project.git
cd Keeper_Project

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the local URL shown in your terminal (Vite defaults to `http://localhost:5173`) to view the app.

---

### Other available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

<div align="center">

Built while exploring pre-built React component libraries (Material UI) and component-driven UI design.

⭐ If you find this useful, consider giving the repo a star!

</div>
