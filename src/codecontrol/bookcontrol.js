const bookmodel=require('../models/bookmodel')
let bookdata=async function(req,res){
    let data=req.body;
    //console.log(data);
    let savedata= await bookmodel.create(data);
    res.send({Newbookadded:savedata});
}
let showBookdata=async function(req,res){
    let books=await bookmodel.find()
    res.send({Data:books})
}
module.exports.bookdata=bookdata;
module.exports.showBookdata=showBookdata;