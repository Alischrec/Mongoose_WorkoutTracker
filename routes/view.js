const express = require('express');
const router = express.Router();
const db = require("../models");

// index html
app.get('/'), (req, res) => {
    res.render('/');

}

// exercise html
app.get('/exercise'), (req, res) => {
}

// stats html
app.get('/stats'), (req, res) => {

}