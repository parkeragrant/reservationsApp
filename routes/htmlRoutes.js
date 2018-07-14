module.exports = function(app) {
    app.get(“/”, function(req, res) {
        res.sendfile(path.join(__dirname, ‘index.html’));
    })
   }

    
    
