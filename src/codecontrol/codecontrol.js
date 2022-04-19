const { batchschema, devloperschema } = require('../models/modelschemas');

let batchdata = async function (req, res) {
    let data = req.body;
    let batch = await batchschema.create(data);
    res.send({ batch })
}
let devloperdata = async (req, res) => {
    let data = req.body
    let devdata = await devloperschema.create(data);
    res.send({ newdev: devdata })
}
let scholar = async (req, res) => {
    let data = await devloperschema.find({ $and: [{ gender: 'female' }, { percentage: { $gte: 70 } }] }).populate('batch')
    res.send({ data })
}
let getdata = async (req, res) => {
    let per = req.query.percentage;
    let prg = req.query.program
    let batch = await batchschema.find({ program: prg })
    let data = batch.map(x => x._id)
    if (per) {
        if (prg) {
            let result = await devloperschema.find({
                $and: [{ percentage: { $gte: per } }, { batch: data }]}).populate('batch')
            if (result.length>0) {
                res.send({result})
            }
            else {
                res.send({result:"no such person"})
            }
        } else {
            res.send({ result: "program missing" })
        }
    } else {
        res.send({ result: "percentage missing" })
    }
}

// let Bookdata = async function (req, res) {
//     let bookdata = req.body
//     if (bookdata.authorid){
//         if (bookdata.publisher){
//             let authid = await authorSchema.findOne({ _id: bookdata.authorid }).then((succes) => { return succes._id }, (err) => { return null })
//             if (authid) {
//                 let publisherid = await publisherSchema.findOne({ _id: bookdata.publisher }).then((succes) => { return succes._id }, (err) => { return null })
//                 if (publisherid) {
//                     let savedata = await bookSchema.create(bookdata);
//                     res.send({ data: savedata })
//                 }
//                 else {
//                     res.send({ data: "Publisher id Invalid" })
//                 }
//             }
//             else {
//                 res.send({ data: "author id Invalid" });
//             }
//         } else {
//             res.send("publisher id missing")
//         }
//     }else{
//         res.send("author id missing")
//     }
// }
// let showbookdata = async function(req,res){
// let book=await bookSchema.find().populate('authorid').populate('publisher')
// console.log(book)
// res.send({data:book})
// }

// let finddata= async (req,res)=>{
//     let penguindata=await publisherSchema.findOne({name:"Penguin"})
//     let harperdata=await publisherSchema.findOne({name:"HarperCollins"})
//     let bookdata=await bookSchema.updateMany({publisher:{$in:[penguindata._id,harperdata._id]}},{$set:{isHardcover:true}},{new:true})
//     res.send({data:bookdata})
// }
// let pricechange=async(req,res)=>{
//  let data=await authorSchema.find({rating:{$gte:3.5}})
//  let ans=data.map((x)=>x._id)
//  let priceupdate=await bookSchema.updateMany({authorid:{$in:ans}},{$inc:{price:+40}});
//  res.send({priceupdate})   
// }


module.exports.batchdata = batchdata;
module.exports.devloperdata = devloperdata;
module.exports.scholar = scholar;
module.exports.getdata = getdata;

// module.exports.finddata= finddata;
// module.exports.pricechange=pricechange;