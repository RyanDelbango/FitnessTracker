const express = require('express');
const user = require('../models/foodlog');

const app = express.Router();

app.get("/", (req, res) => {

    user.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.get("/:userid", (req, res) => {

    user.get(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

app.get("/totalcalories/:userid", (req, res) => {

    user.total(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

app.get("/averagecalories/:userid", (req, res) => {

    user.average(req.params.userid, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});

app.post("/create", (req, res) => {
    user.create(req.body, (err, data) => {
        if(err) throw (err)
        res.send(data);
    });

});

app.post("/edit", (req, res) => {
    user.edit(req.body, (err, data) => {
        if(err) throw (err);
        res.send(data);
    });

});


module.exports = app;