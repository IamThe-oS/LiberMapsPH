const { default: mongoose } = require('mongoose');
const Library = require('../models/library');
const Review = require('../models/review')
const { DateTime } = require("luxon");

module.exports.createReview = async(req, res) => {
    const library = await Library.findById(mongoose.Types.ObjectId(req.params.id))
    const review = new Review(req.body.review)

    review.reviewDate = DateTime.now().toLocaleString(DateTime.DATE_MED)
    library.reviews.push(review)
    await review.save();
    await library.save();
    res.redirect(`/libraries/${library._id}`)
}

module.exports.deleteReview = async(req, res) => {
    const {id, reviewId } = req.params;
    await Library.findByIdAndUpdate(id, { $pull: { reviews: reviewId }})
    await Review.findByIdAndDelete(reviewId)
    res.redirect(`/libraries/${id}`)
}
