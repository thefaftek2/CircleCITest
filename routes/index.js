'use strict';
var express = require('express');
var router = express.Router();

var pageInfo = {};

/* GET home page. */
router.get('/', function (req, res) {
    console.log(req.query.input);
    pageInfo.title = checkinput(req.query.input);
    res.render('index', pageInfo);
});

function checkinput(newinput) {

    var title = 'Express';
    if (newinput != null) {
        title = newinput;
    }

    return title;
}

module.exports = {
    checkinput: checkinput,
    router: router
}