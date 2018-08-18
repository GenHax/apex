////////////////////////////////////////////////////////////////
//////**** Controller for Patient-related functions ******//////
////////////////////////////////////////////////////////////////

var patientModel = require('../models/patient');

var ListAllPatients = function (req , res){
    // Patient listing funciton.
    patientModel.find({}, function(err, docs) {
        if (err) throw err;
        console.log(docs);
        res.json(docs);
    });
}


module.exports = { "ListAllPatients": ListAllPatients };