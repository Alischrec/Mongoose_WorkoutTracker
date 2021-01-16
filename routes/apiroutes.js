const express = require('express');
const router = express.Router();
const db = require("../models/index.js");

router.post('/workouts', (req, res) => {
    db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            res.json(err);
        })
})

router.put('/workouts/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    db.Workout.findByIdAndUpdate(id, {
      $push: {
        exercises: req.body
      }
    }).then( updatedWorkout => {
      res.json(updatedWorkout)
    }).catch(err => {
      res.json(err);
  })
})

// router.get('/workouts/range', (req, res) => {
//     db.Workout.find({}, (err, data) => {
//       res.json(data)
//     })
// })

const workoutHandler = (req, res) => {
  db.Workout.aggregate([{
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }])
  .sort({day: 1})
  .limit(10)
  .then( updatedExercise => {
    const transformedExercises = updatedExercise.map(workout => {
      const parsedExercises = workout.exercises.map(e => {
        return JSON.parse(e)
      })
      return {
        ...workout, exercises: parsedExercises, totalDuration: parsedExercises.reduce((total, current) => {
          return total + current.duration
        }, 0)
      }
    })
    console.log(transformedExercises)
    res.json(transformedExercises)})
  .catch(err => {
    res.json(err);
})
}

router.get('/workouts/range', workoutHandler)

router.get('/workouts', workoutHandler)

router.delete('/workouts', (req, res) => {
    db.Workout.remove({}, (err, data) => {
  
    })
})

module.exports = router;