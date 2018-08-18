////////////////////////////////////////////////////////////////
//////**** Controller for Worker-related functions ******///////
////////////////////////////////////////////////////////////////

var workerModel = require('../models/worker');

var ListAllWorkers = function (req , res){
    // Worker listing function.
    workerModel.find({}, function(err, docs) {
        if (err) throw err;
        console.log(docs);
        res.json(docs);
    });
}

module.exports = { "ListAllWorkers": ListAllWorkers};