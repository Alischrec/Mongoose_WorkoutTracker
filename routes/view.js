const express = require('express');
const router = express.Router();
const path = require('path')

// index html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/index.html'))
})

// exercise html
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/exercise.html'))
})

// stats html
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/stats.html'))
})

module.exports = router