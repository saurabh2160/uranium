const { bookSchema, publisherSchema, authorSchema } = require('../models/bookmodel')


let Bookdata = async function (req, res) {
    let bookdata = req.body
    if (bookdata.authorid){
        if (bookdata.publisher){
            let authid = await authorSchema.findOne({ _id: bookdata.authorid }).then((succes) => { return succes._id }, (err) => { return null })
            if (authid) {
                let publisherid = await publisherSchema.findOne({ _id: bookdata.publisher }).then((succes) => { return succes._id }, (err) => { return null })
                if (publisherid) {
                    let savedata = await bookSchema.create(bookdata);
                    res.send({ data: savedata })
                }
                else {
                    res.send({ data: "Publisher id Invalid" })
                }
            }
            else {
                res.send({ data: "author id Invalid" });
            }
        } else {
            res.send("publisher id missing")
        }
    }else{
        res.send("author id missing")
    }
}
let showbookdata = async function(req,res){
let book=await bookSchema.find().populate('authorid').populate('publisher')
console.log(book)
res.send({data:book})
}

let finddata= async (req,res)=>{
    let penguindata=await publisherSchema.findOne({name:"Penguin"})
    let harperdata=await publisherSchema.findOne({name:"HarperCollins"})
    let bookdata=await bookSchema.updateMany({publisher:{$in:[penguindata._id,harperdata._id]}},{$set:{isHardcover:true}},{new:true})
    res.send({data:bookdata})
}
let pricechange=async(req,res)=>{
 let data=await authorSchema.find({rating:{$gte:3.5}})
 let ans=data.map((x)=>x._id)
 let priceupdate=await bookSchema.updateMany({authorid:{$in:ans}},{$inc:{price:+40}});
 res.send({priceupdate})   
}

let publisherdata = async function (req, res) {
    let pdata = req.body;
    let publisher = await publisherSchema.create(pdata);
    res.send({ publisher })
}
let authdata = async (req, res) => {
    let data = req.body
    let authdata = await authorSchema.create(data);
    res.send({ newauth: authdata })
}
module.exports.Bookdata = Bookdata;
module.exports.publisherdata = publisherdata;
module.exports.authdata = authdata;
module.exports.showbookdata = showbookdata;
module.exports.finddata= finddata;
module.exports.pricechange=pricechange;