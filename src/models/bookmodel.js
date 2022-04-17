const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

//const { Schema } = mongoose;
const authorSchema = new mongoose.Schema({
    authorname: String,
    age: Number,
    address: String,
    rating:Number
})
const bookSchema = new mongoose.Schema({
    bookname: {
        type: String,
        unique: true,
        required: true
    },
    authorid: {
        type: ObjectId,
        ref: "Author",
        required: true
    },
    price: Number,
    ratings: Number,
    isHardcover:{
        type:String,
        default:false
    },
    publisher: {
        type: ObjectId,
        ref: "publisher"
    }
})
const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    headquater: String,
});
module.exports.authorSchema=mongoose.model('Author',authorSchema)
module.exports.bookSchema=mongoose.model('Book',bookSchema)
module.exports.publisherSchema=mongoose.model('publisher',publisherSchema)
