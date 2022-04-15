const mongoose = require('mongoose');
//const { Schema } = mongoose;
const authorSchema=new mongoose.Schema({
    
        author_id:{
            type:Number,
            unique:true,
            required:true
        },
        author_name:String,
        age:Number,
        address:String
        })
const bookSchema = new mongoose.Schema({
    bookname: {
        type:String,
        unique:true,
        required:true
    },
    author_id:{
        type:Number,
        required:true
    },
    price:Number,
    ratings:Number,
}, { timestamps : true });
module.exports.authorSchema=mongoose.model('author',authorSchema)
module.exports.bookSchema=mongoose.model('Book',bookSchema)