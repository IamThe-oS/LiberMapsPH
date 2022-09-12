
module.exports.index =(req, res) => {
    res.render("libraries/index")
}

module.exports.renderNewForm = (req, res) => {
    res.render("libraries/new")
}