let headerval= (req, res, next)=>{
let data=req.headers
let validinfo=data["isfreeappuser"]
if(validinfo){
    if(validinfo=="true"){
        req.isfreeappuser=true
    }else{
        req.isfreeappuser=false
    }
    next();
}else{
    res.send({data:"header missing"})
}
}

module.exports.headerval=headerval;