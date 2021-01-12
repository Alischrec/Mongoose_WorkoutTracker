const express = require('express');
const router = express.Router();
const db = require("../models");

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

    db.Workout.update({
        _id: mongojs.ObjectID(id)
    }, {
      $set: {
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        modified: Date.now()
      }
    },
      (err, data) => {
        if (err) {
          console.log(err)
        } else {
          res.json(data)
        }
      })
})

router.get('/workouts', (req, res) => {
    db.Workout.find({}, (err, data) => {
  
    })
})

router.get('/workouts/range', (req, res) => {
    db.Workout.find({}, (err, data) => {
  
    })
})

router.delete('/workouts', (req, res) => {
    db.Workout.remove({}, (err, data) => {
  
    })
})

module.exports = router;