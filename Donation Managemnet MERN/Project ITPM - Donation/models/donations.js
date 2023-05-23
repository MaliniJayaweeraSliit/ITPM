const mongoose = require('mongoose');


const donationSchema = new mongoose.Schema({
    restaurantName:{
        type:String,
        required:true
    },

    ownerName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    foodType:{
        type:String,
        required:true
    },
    
    donationTime:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    },

    foodQuantity:{
        type:Number,
        required:true
    },

    
});

module.exports = mongoose.model('Donations',donationSchema);