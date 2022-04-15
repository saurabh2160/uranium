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
res.send({data:book})
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