import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;
const projectSchema = new Schema({
    paymentID : {
        type : String,
        required : true
    },

    paymentDescription : {
        type : String,
        required : true
    },

    paymentCategory : {
        type : String,
        required : true
    },

    paymentDate : {
        type : Date,
        required : true
    },

    paymentAmount : {
        type : String,
        required : true
    }
})

const Project = model("Project", projectSchema);
export default Project;