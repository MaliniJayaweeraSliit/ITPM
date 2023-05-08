const mongoose = require("mongoose");
const requestSchema = mongoose.Schema({

    request: {
        type: String,
        require: true
    },
    requestid : {
        type: String,
        require: true
    },
    userid : {
        type: String,
        require: true
    },
    fromdate : {
        type: String,
        require: true
    },
    todate : {
        type: String,
        require: true
    },
    totalfoods : {
        type: Number,
        require: true
    },
    totaldays: {
        type: Number,
        require: true
    },
    serviceid: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        require: true,
        default: 'requested'
    }
}, {timestamps : true,
})

const requestingmodel = mongoose.model('resquesting', requestSchema);

module.exports = requestingmodel