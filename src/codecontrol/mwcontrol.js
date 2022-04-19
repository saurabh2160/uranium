const moment=require('moment')
let data =  function(req,res){
    let timestamp=moment().format('DD-MM-YYYY HH-MM-SS');
    let ip=req.socket.remoteAddress
    let routepath=req.route.path
    console.log(timestamp +" "+ ip +" "+routepath)
    res.send({data:timestamp,ip,routepath})
}
let info=(req,res)=>{
    res.send({info:"i am falna"})
    console.log("hello i am at function-up")
}
let info2=(req,res)=>{
    res.send({info:"i am lost"})
    console.log("hello i am in uranium")
}
module.exports.data=data
module.exports.info=info
module.exports.info2=info2

