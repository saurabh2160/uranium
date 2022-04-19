const moment=require('moment')
let data =  function(req,res){
    let timestamp=moment().format('DD-MM-YYYY HH-MM-SS');
    let ip=req.socket.remoteAddress
    let routepath=req.route.path
    console.log(timestamp+" "+ip+" "+routepath)
    res.send({data:timestamp,ip,routepath})
}
module.exports.data=data

