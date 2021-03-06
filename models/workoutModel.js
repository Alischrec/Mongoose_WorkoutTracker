const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workout = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {type:String},
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }]
})

module.exports = mongoose.model('Workout', Workout);