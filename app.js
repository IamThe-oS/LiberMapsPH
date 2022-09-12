const express = require('express');
const path = require("path");
const ejsMate = require("ejs-mate");

const librariesRoutes = require("./routes/libraries");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/libraries', librariesRoutes);

app.get('/', (req, res) => {
    res.render("home");
})

// app.get()

// library/ get, post->create
// library/:id get, put->edit, delete
// library/new get



app.listen(3000, () => {
    console.log("Open on Port 3000")
})