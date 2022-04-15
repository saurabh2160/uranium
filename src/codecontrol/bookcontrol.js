const {bookSchema,authorSchema}=require('../models/bookmodel') 


let authdata=async function(req,res){
    let authdata=req.body;
    let savedata= await authorSchema.create(authdata);
    res.send({Newbookadded:savedata});
}
let Bookdata=async function(req,res){
    let bookdata=req.body
    let books=await bookSchema.create(bookdata)
    res.send({Data:books})
}
let getbooks=async function(req,res){
    let auth=await authorSchema.findOne({author_name:"Chetan Bhagat"})
    let bookid= await bookSchema.find({author_id:auth.author_id}).select({bookname:1,author_id:1,_id:0})
    res.send({Data:bookid})
}
let authoftwostates=async function(req,res){
    let auth=await bookSchema.find({bookname:"Two states"})
    let x=auth[0].author_id                              
    let authn=await authorSchema.find({author_id:x}).select({author_name:1,_id:0})
    let y=auth[0].bookname
    let book=await bookSchema.findOneAndUpdate({bookname:y},{price:100},{new:true}).select({price:1,_id:0})

    res.send({Data:authn,book})
}
let getbookscost=async function(req,res){
    let bookcost=await bookSchema.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let id=bookcost.map(x=>x.author_id)
    let temp =[];
    for(i=0;i<id.length;i++){
        let x=id[i];
    const authdata=await authorSchema.find({author_id:x}).select({author_name:1,_id:0})
    temp.push(authdata)
    }
    res.send({Data:temp.flat()})
}
module.exports.authdata=authdata;
module.exports.Bookdata=Bookdata;
module.exports.getbooks=getbooks;
module.exports.authoftwostates=authoftwostates;
module.exports.getbookscost=getbookscost;
