const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  regNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  engineNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  chassisNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  make: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: String,
    required: true,
    trim: true,
  },
  fuel: {
    type: String,
    required: true,
    
  },
  
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
