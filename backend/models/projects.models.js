const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const projectSchema = new Schema({
    projectOwnerid:{
        type: Number,
        default : null
    },
    projectID : {
        type : Number,
        default : null
    },
    projectName : {
        type : String,
        required : true
    },

    projectDescription : {
        type : String,
        required : true
    },
    projectCategoty : {
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
    }
})

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;