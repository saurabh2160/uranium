const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

//const { Schema } = mongoose;
const batchschema = new mongoose.Schema({
    name: String,
    size: Number,
    program:{
        type:String,
        enum:['backend','frontend']
    }
})
const devloperschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender:{
        type:String,
        enum:['male','female','others']
    },
    percentage:Number,
    batch:{
        type:ObjectId,
        ref:'Batch'
    }

});
module.exports.batchschema=mongoose.model('Batch',batchschema)
module.exports.devloperschema=mongoose.model('Devloper',devloperschema)
