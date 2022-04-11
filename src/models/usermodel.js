const mongoose = require('mongoose');
//const { Schema } = mongoose;

const userschema = new mongoose.Schema({
    firstname: String, // String is shorthand for {type: String}
    lastname: String,
    gender: {
        type: String,
        enum: ['male', 'female', 'LGBTQ', 'others']
    },
    emailid:String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    age: Number,
}, { timestamps : true });
module.exports=mongoose.model('User',userschema)