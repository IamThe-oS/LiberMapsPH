const Library = require('../models/library')

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
    // res.send(req.params.id)
    const library = await Library.findById(req.params.id)
    // console.log(library)
    res.render("libraries/show", { library })
}