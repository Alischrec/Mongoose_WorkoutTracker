const express = require('express');
const router = express.Router();
const db = require("../models/index.js");

router.post('/workouts', (req, res) => {
  console.log(req.body)
  db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout)
    }).catch(err => {
      res.json(err);
    })
})

router.put('/workouts/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.Workout.findByIdAndUpdate(id, {
    $push: {
      exercises: req.body
    },
  }, {new: true}).then(updatedWorkout => {
    console.log('hello')
    res.json(updatedWorkout)
  }).catch(err => {
    console.log(err);
    res.json(err);
  })
})

const workoutHandler = (req, res) => {
  db.Workout.aggregate([{
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }])
    .sort({ day: 1 })
    .limit(10)
    .then(updatedExercise => {
      res.json(updatedExercise)
    })
    .catch(err => {
      console.log(err)
      res.json(err);
    })
}

router.get('/workouts/range', workoutHandler)

router.get('/workouts', workoutHandler)

router.delete('/workouts', (req, res) => {
  db.Workout.findByIdAndDelete(req.body.id, (err, data) => {
    res.json(true)
    if (err) {
      res.json(err)
    }
  })
})

module.exports = router;