let info=(req,res)=>{
    res.send({info:"i am falna"})
    console.log("hello i am at function-up")
}
let info2=(req,res)=>{
    res.send({info:"i am lost"})
    console.log("hello i am in uranium")
}
module.exports.info=info
module.exports.info2=info2

