const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const projectSchema = new Schema({
    projectID : {
        type : String,
        required : true
    },

    projectDescription : {
        type : String,
        required : true
    },

    projectStartDate : {
        type : Date,
        required : true
    },

    projectEndDate : {
        type : Date,
        required : true
    },
    projectLocation: {
        type : String,
        required : true
    }
})

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;