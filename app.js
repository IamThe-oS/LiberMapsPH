const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.listen(3000, () => {
    console.log("Open on Port 3000")
})