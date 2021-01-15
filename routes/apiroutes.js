const express = require('express');
const router = express.Router();
const db = require("../models/index.js");

router.post('/workouts', (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            res.json(err);
        })
})

router.put('/workouts/:id', (req, res) => {
    const id = req.params.id;
    db.Workout.findById(id, null, (err, data) => {
      data.exercises.push(JSON.stringify(req.body))
      data.save(null, (err2, data2) => {
        res.json(data2)
      })
    })
})

router.get('/workouts', (req, res) => {
    db.Workout.find({}, (err, data) => {
      res.json(data)
    })
})

router.get('/workouts/range', (req, res) => {
    db.Workout.find({}, (err, data) => {
    res.json(data);
    })
})

router.delete('/workouts', (req, res) => {
    db.Workout.remove({}, (err, data) => {
  
    })
})

module.exports = router;