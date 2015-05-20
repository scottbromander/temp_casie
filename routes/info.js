var express = require('express');
var path = require('path');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/data/movies.json'));
});

module.exports = router;