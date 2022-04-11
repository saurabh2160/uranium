const mongoose = require('mongoose');
//const { Schema } = mongoose;

const bookSchema = new mongoose.Schema({
    bookname: {
        type:String,
        unique:true,
        required:true
    }, 
    authorname: String,
    category:String,
    year:Number
}, { timestamps : true });
module.exports=mongoose.model('Book',bookSchema)