const express = require('express');
const router = express.Router();
const db = require("../models");


router.get('/workouts', (req, res) => {
    db.Workout.find({}, (err, data)=> {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

router.put('/workouts/:id', (req, res) => {

})

router.post('/workouts', (req, res) => {

})

router.get('/workouts/range', (req, res) => {

})

module.exports = router;