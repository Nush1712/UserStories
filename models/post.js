const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  email: {
    type: String,
    required: 'Email is required'
  },
  password: {
    type: String
  },
  location: {
    type: String
  },
  company: {
    type: String
  },
  bio: {
    type: String
  },
  followCount: {
    type: Number
  },
  noOfRepos: {
    type: Number
  },
  createdAt: {
    type: Date
  },
  createdBy: {
    type: String
  },
  modifiedAt: {
    type: Date
  },
  modifiedBy: {
    type: String
  }
});


module.exports = mongoose.model("User", userSchema);
