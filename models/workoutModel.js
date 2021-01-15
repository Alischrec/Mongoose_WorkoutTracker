const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workout = new Schema({
    day: {
        type: Date,
        default: Date.now
      },

      exercises: [{
          type: String,
          name: String,
          duration: Number,
          weight: Number,
          reps: Number,
          sets: Number
      }],
    totalDuration: Number
})

module.exports = mongoose.model('Workout', Workout);