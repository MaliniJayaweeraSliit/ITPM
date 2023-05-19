const mongoose = require('mongoose');
const { countDocuments } = require('./application.models');

const Schema = mongoose.Schema;
const projectSchema = new Schema({
    projectOwnerid:{
        type: Number,
        defaultvalue:1
        
    },
    projectID : {
        type : Number,

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
});

projectSchema.pre('save',async function(){
    const doc = this;
    if(doc.isNew){
        const count = await mongoose.model('Project',projectSchema).countDocuments();
        doc.projectID = count+1;
    }
})

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;