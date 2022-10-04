const Library = require('../models/library');
const Review = require('../models/review')

module.exports.createReview = async(req, res) => {
    res.send(req.params.id)
    const library = await Library.findById(req.params.id)
    const review = new Review(req.body.review)
    res.send(req.params.id)
    // library.reviews.push(review);
    // // res.send(library)
    // await review.save();
    // await library.save();
    // res.redirect(`/libraries/${library.id}`)
}

