# Space Theme Portfolio

A full-stack portfolio website with a cosmic space theme, featuring a React frontend and Node.js/Express backend.

## Features

- 🌌 Cosmic-themed UI with animations and effects
- 🚀 Responsive design with Tailwind CSS
- ⚡ Real-time project data from backend API
- 📧 Contact form with backend integration
- 🎨 Interactive elements and hover effects

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- CORS
- Body-parser

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Space-Protfolio
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
cd ..
```

### Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```
The backend will run on http://localhost:5000

2. In a new terminal, start the frontend:
```bash
npm run dev
```
The frontend will run on http://localhost:5173

### API Endpoints

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/contact` - Submit contact form
- `GET /api/contact/messages` - Get all contact messages (admin)
- `GET /api/health` - Health check

## Project Structure

```
Space-Protfolio/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── server/
│   ├── package.json
│   └── server.js
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Adding New Projects
Add new projects to the `projects` array in `server/server.js` or connect to a database for dynamic management.

### Styling
- Colors and themes are defined in `src/index.css`
- Tailwind CSS classes are used throughout the components
- Custom animations and effects are in the CSS

### Backend
- The backend is a simple Express server
- In production, consider adding authentication, database integration, and email sending for contact forms

## Deployment

### Frontend
```bash
npm run build
```
Deploy the `dist` folder to your hosting service (Netlify, Vercel, etc.)

### Backend
Deploy the `server` folder to a Node.js hosting service (Heroku, Railway, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

Designed and built with ❤️ in the cosmos ✨
