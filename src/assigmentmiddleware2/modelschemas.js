const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userschema = new mongoose.Schema({
    name: String,
    balance:{
        type:Number,
        default:100
    },
    address:String,
    age:Number,
    gender:{
        type:String,
        enum:['male','female','others']
    },
    isFreeAppuser:{
        type:Boolean,
        default:false
    }
})
const productschema = new mongoose.Schema({
    name:String,
    category:{
        type:String,
        enum:['book','games']
    },
    price:{
        type:Number,
        required:true
    }

})
const orderschema= new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:'User'
    },
productId:{
    type:ObjectId,
    ref:'Product'
}, 
amount:{
    type:Number,
    default:0
}, 
isFreeAppUser:{
    type:Boolean
}, 
date:{
    type:String,
    default:new Date().toLocaleString()
}
})
module.exports.userschema=mongoose.model('User',userschema)
module.exports.productschema=mongoose.model('Product',productschema)
module.exports.orderschema=mongoose.model('Order',orderschema)