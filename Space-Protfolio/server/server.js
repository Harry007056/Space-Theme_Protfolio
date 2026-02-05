const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for demo purposes (replace with database in production)
let contactMessages = [];
let projects = [
  {
    id: 1,
    icon: '🌌',
    title: 'Nebula Dashboard',
    description: 'An immersive analytics platform with real-time data visualization and AI-powered insights. Features 3D charts and cosmic-themed UI.',
    tags: ['React', 'Three.js', 'D3.js', 'WebGL'],
    github: 'https://github.com/example/nebula-dashboard',
    demo: 'https://nebula-dashboard.demo.com'
  },
  {
    id: 2,
    icon: '🛸',
    title: 'Quantum Commerce',
    description: 'Next-generation e-commerce platform with AR product previews, blockchain payments, and a revolutionary shopping experience.',
    tags: ['Next.js', 'AR.js', 'Stripe', 'Web3'],
    github: 'https://github.com/example/quantum-commerce',
    demo: 'https://quantum-commerce.demo.com'
  },
  {
    id: 3,
    icon: '🌠',
    title: 'Cosmic Chat AI',
    description: 'Intelligent chatbot with natural language processing and personality customization. Built with cutting-edge AI models.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'GPT-4'],
    github: 'https://github.com/example/cosmic-chat-ai',
    demo: 'https://cosmic-chat-ai.demo.com'
  }
];

// API Routes

// Get all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Get project by ID
app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

// Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newMessage = {
    id: contactMessages.length + 1,
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  contactMessages.push(newMessage);

  console.log('New contact message received:', newMessage);

  res.status(201).json({
    message: 'Message sent successfully! 🚀',
    id: newMessage.id
  });
});

// Get all contact messages (for admin purposes)
app.get('/api/contact/messages', (req, res) => {
  res.json(contactMessages);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Space Portfolio Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Space Portfolio Backend running on port ${PORT}`);
  console.log(`🌌 API available at http://localhost:${PORT}/api`);
});
