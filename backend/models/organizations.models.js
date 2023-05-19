const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const organizationSchema = new Schema({
    email:{
        type: String,
        default : null
    },
    password:{
        type: String,
        required : true
    }

})

const Organization = mongoose.model("Organization", organizationSchema);
module.exports = Organization;