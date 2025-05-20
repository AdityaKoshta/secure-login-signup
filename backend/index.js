const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // your React app
    credentials: true, // if you're using cookies or sessions
  })
);

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "apnacollege@123",
  database: "assignment",
});

app.listen(3000, () => {
  console.log("Sever running on port 3000");
});

app.get("/", (req, res) => {
  res.send("This is the Root");
});

//Signup

app.post("/api/signup", async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(name);
  const hashed = await bcrypt.hash(password, 10);
//   db.query(
//     "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
//     [name, email, hashed, role]
//   );
  try {
    const [result] = await db.promise().query("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, hashed, role]);
    res.json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//Login

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user by email
    const [users] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    // If no user found
    if (users.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    

    const user = users[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      'secret', // Replace with env variable in production
      { expiresIn: '1h' }
    );

    // Send response
    res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});
