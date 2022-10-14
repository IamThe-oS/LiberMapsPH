const express = require('express');
const path = require("path");
const ejsMate = require("ejs-mate");

const librariesRoutes = require("./routes/libraries");
const reviewsRoutes = require("./routes/reviews");
const { default: mongoose } = require('mongoose');

const Library = require('./models/library');
const Review = require('./models/review')


const app = express();

mongoose.connect("mongodb://localhost:27017/liberMapsPH")

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", () => {
    console.log("Database Connected")
})

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/libraries', librariesRoutes);
// app.use('/libraries/:id/reviews', reviewsRoutes);

app.post('/libraries/:id/reviews', async(req, res) => {
    const library = await Library.findById(req.params.id)
    const review = new Review(req.body.review)
    // res.send(review)
    library.reviews.push(review)
    await review.save();
    await library.save();
    res.redirect(`/libraries/${library._id}`)
})

app.get('/', (req, res) => {
    res.render("home");
})

app.post('/result', (req, res) => {
    res.send(req.body)
})

// app.get()

// library/ get, post->create
// library/:id get, put->edit, delete
// library/new get



app.listen(3000, () => {
    console.log("Open on Port 3000")
})