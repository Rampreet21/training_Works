const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const server = express();
const port = 3000;

// Middleware
server.use(express.static('public'));
server.use(express.json());

// Routes (HTML)
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

server.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

server.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// 🔹 Schema + Model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

// 🔹 MongoDB Connection
mongoose.connect('mongodb://localhost:27017/dbData')
.then(() => {
    console.log('✅ Database Connected');

    server.listen(port, () => {
        console.log("🚀 SERVER RUNNING ON: http://localhost:" + port);
    });
})
.catch(err => {
    console.error('❌ Database connection error:', err);
});

// 🔹 Register API (INSERT DATA)
server.post('/user/register', async (req, res) => {
    try {
        const data = req.body;

        const user = new User(data);
        await user.save();

        console.log("User Saved:", data);

        res.send("<b> User Registered Successfully </b>");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving user");
    }
});

// 🔹 Get All Users (READ DATA)
server.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send("Error fetching users");
    }
});

// Extra route
server.get('/products', (req, res) => {
    res.send("Products Page");
});