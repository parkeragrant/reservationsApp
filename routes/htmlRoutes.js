var path = require('path');
var html = require('html');

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, 'HTML/index.html'))
    })
    app.get("/view", function (req, res) {
        res.sendFile(path.join(__dirname, 'HTML/view.html'))
    })
    app.get("/make", function (req, res) {
        res.sendFile(path.join(__dirname, 'HTML/make.html'))
    })
}




