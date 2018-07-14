var tableData = require('../data/tableData');
var waitListData = require('../data/waitingListData');


module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
        res.json([tableData, waitListData]);
        });
    
    app.post('/api/tables', function(req, res){
        if(tableData.length < 5 ){
            tables.push(req.body);
            res.json(true);
        }


    });



}

