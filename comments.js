// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory database
let comments = [];

// CRUD operations

// Create a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).send(comment);
});

// Read all comments
app.get('/comments', (req, res) => {
    res.status(200).json(comments);
});