// import mongoose library
const mongoose = require("mongoose");


//Construct schema for workout document 
//create data and  structure in NoSQL database
const ExampleSchema = new mongoose.Schema({


  exerciseName: {
    type: String,
    trim: true,
    required: "String is Required",
  },

  weight: {
    type: Number,
    required: true,
    min: 1,
  },

  sets: {
    type: Number,
    required: true,
    min: 1,
  },

  reps: {
    type: Number,
    required: true,
    min: 1,
  },

  duration: {
    type: Number,
    required: true,
    min: 1,
  },


});


const Workouts = mongoose.model("Workouts", WorkoutSchema);


//export module
module.exports = Example;