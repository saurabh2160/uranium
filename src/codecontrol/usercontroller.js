const usermodel=require('../models/usermodel')
let userdata=async function(req,res){
    let data=req.body;
    console.log(data);
    let savedata= await usermodel.create(data);
    res.send({savedata});
}
module.exports.userdata=userdata;