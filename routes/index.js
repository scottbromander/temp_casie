var express = require('express');
var app = express.Router();
var path = require('path');

app.get("/", function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

app.post("/", function(req,res,next){
    Todo.create(req.body, function(err, post){
        res.redirect('/');
    })
});

console.log('index loaded');
module.exports = app;