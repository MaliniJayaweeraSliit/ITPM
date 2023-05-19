const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const applicationSchema = new Schema({
    applicationid:{
        type: Number,
        default : null
    },
    volunteerNic:{
        type: String,
        required : true
    },
    projectID : {
        type : Number,
        default : null
    },

})

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;