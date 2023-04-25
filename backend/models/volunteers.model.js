const mongoose = require('mongoose');

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const volunteersSchema = new mongoose.Schema({
  NIC: {
    type: String,
    required: true,
    unique: true,
  },
  volunteer_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  password: {
    type: String,
    required: true,
  },
  birth_day:{
    type: Date,
    required: true,
  },
  phone:{
    type: Number,
    required:true,
  }
});

 const Volunteer = mongoose.model('Volunteer', volunteersSchema);
 module.exports = Volunteer;