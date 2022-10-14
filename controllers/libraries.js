const Library = require('../models/library')
const { DateTime } = require("luxon");

module.exports.index = async(req, res) => {
    const libraries = await Library.find({});
    res.render("libraries/index", { libraries })
}

module.exports.renderNewForm = (req, res) => {
    res.render("libraries/new")
}

module.exports.createLibrary = async(req, res, next) => {
    const library = new Library(req.body.library);
    await library.save();

    res.redirect(`/libraries/${library._id}`)
}

module.exports.showLibrary = async(req, res) => {
    const library = await Library.findById(req.params.id)
    const createdAt = DateTime.fromJSDate(library.createdAt).toFormat('MMMM dd, yyyy')
    res.render("libraries/show", { library, createdAt, })
}