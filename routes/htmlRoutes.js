var path = require('path');
var html = require('html');

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, 'HTML/index.html'))
    })
}




