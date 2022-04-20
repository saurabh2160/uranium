const { userschema, productschema, orderschema } = require("./modelschemas")

let userdata = async (req, res) => {
    let userinfo = req.body
    let data = await userschema.create(userinfo)
    res.send({ newuser: data })

}
let productdata = async (req, res) => {
    let proinfo = req.body
    let data = await productschema.create(proinfo)
    res.send({ newproduct: data })
}
let orderdata = async (req, res) => {
    let orderinfo = req.body
    const header = req.headers
    let userid = orderinfo.userid
    let productid = orderinfo.productid
    let userverification = await userschema.findOne({ _id: userid }).catch(err=> null)
    if (!userverification) {
        return res.send({ data: "Invalid userID !" })
    }
    let productverification = await productschema.findOne({ _id: productid }).catch(err=>null)
    if (!productverification) {
        return res.send({ data: "Invalid ProductID !" })
    }
    let productprice = 0
    if (header.isfreeappuser == "false") {
        if(userverification.balance<productverification.price){
            return res.send({data:"Insufficient balance !"})
        }
        await userschema.findOneAndUpdate({ _id: userid }, { $inc: { balance: -productverification.price } })
        productprice = productverification.price;
    }
    let orders={
        userId:userid,
        productId:productid,
        amount:productprice,
        isFreeAppUser:req.isfreeappuser
    }
    let data=await orderschema.create(orders)
    res.send({data:data})
}
module.exports.userdata = userdata;
module.exports.productdata = productdata;
module.exports.orderdata = orderdata;
