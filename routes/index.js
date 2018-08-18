////////////////////////////////////////////////////////////////
///////////**** Routes for all the EJS Views/Pages ******///////
////////////////////////////////////////////////////////////////

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get("/training", function(req, res, next) {
    res.render('training.ejs');
});

router.get("/dashboard", function(req, res, next) {
    res.render('dashboard.ejs');
});

router.get("/patient_registration", function(req, res, next) {
    res.render('patient_registration.ejs');
});

router.get("/patient_list", function(req, res, next) {
    res.render('patient_list.ejs');
});

router.get("/vaccination_list", function(req, res, next) {
    res.render('vaccination_list.ejs');
});

router.get("/diet_plan", function(req, res, next) {
    res.render('diet_plan.ejs');
});

router.get("/asha_list", function(req, res, next) {
    res.render('asha_list.ejs');
});



router.get("/notify", function(req, res, next) {
    res.render('notify.ejs');
});

module.exports = router;