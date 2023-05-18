const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const applicationSchema = new Schema({
    applicationid : {
        type : String,
        required : true
    },

    projectID : {
        type : String,
        required : true
    },

    volunteer: {
        type : Array,
        required : true
    },

})

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;