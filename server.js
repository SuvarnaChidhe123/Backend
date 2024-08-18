const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory data store
let users = [
  {
    name: "Olivia Rhye",
    status: "Active",
    role: "Product Designer",
    email: "olivia@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Phoenix Baker",
    status: "Active",
    role: "Product Manager",
    email: "phoenix@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Lana Steiner",
    status: "Active",
    role: "Frontend Developer",
    email: "lana@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Demi Wilkinson",
    status: "Active",
    role: "Backend Developer",
    email: "demi@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Candice Wu",
    status: "Active",
    role: "Fullstack Developer",
    email: "candice@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    name: "Olivia Rhye",
    status: "Active",
    role: "Product Designer",
    email: "olivia@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Phoenix Baker",
    status: "Active",
    role: "Product Manager",
    email: "phoenix@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Lana Steiner",
    status: "Active",
    role: "Frontend Developer",
    email: "lana@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Demi Wilkinson",
    status: "Active",
    role: "Backend Developer",
    email: "demi@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Candice Wu",
    status: "Active",
    role: "Fullstack Developer",
    email: "candice@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    name: "Olivia Rhye",
    status: "Active",
    role: "Product Designer",
    email: "olivia@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Phoenix Baker",
    status: "Active",
    role: "Product Manager",
    email: "phoenix@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Lana Steiner",
    status: "Active",
    role: "Frontend Developer",
    email: "lana@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Demi Wilkinson",
    status: "Active",
    role: "Backend Developer",
    email: "demi@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Candice Wu",
    status: "Active",
    role: "Fullstack Developer",
    email: "candice@untitledui.com",
    teams: ["Design", "Product", "Marketing"],
    avatar: "https://randomuser.me/api/portraits/women/47.jpg"
  }
  // ... Add all other users here
];

// Routes

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get user by email
app.get('/api/users/:email', (req, res) => {
  const user = users.find(u => u.email === req.params.email);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Create a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  // Check if the user already exists
  const userExists = users.some(u => u.email === newUser.email);
  if (userExists) {
    return res.status(400).send('User with this email already exists');
  }
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user
app.put('/api/users/:email', (req, res) => {
  const email = req.params.email;
  const updatedUser = req.body;
  const userIndex = users.findIndex(u => u.email === email);

  if (userIndex !== -1) {
    // Ensure the email field remains unchanged during update
    updatedUser.email = email;
    users[userIndex] = updatedUser;
    res.json(updatedUser);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete a user
app.delete('/api/users/:email', (req, res) => {
  const email = req.params.email;
  users = users.filter(u => u.email !== email);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
