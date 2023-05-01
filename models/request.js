const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    purpose : {
        type: String,
        require: true
    },
    neededfoods : {
        type: Number,
        required: true
    },
    date : {
        type: Date,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    imageurls : [],
    currentrequests : [],
    type : {
        type: String,
        required: true
    }
}, {
    timestamps : true,

})

const requestModel = mongoose.model('requests', requestSchema)

module.exports = requestModel