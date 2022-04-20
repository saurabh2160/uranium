let mw1= (req, res, next)=>{
    let timestamp=new Date().toLocaleString();
    let ip=req.socket.remoteAddress
    let routepath=req.url
    console.log(timestamp+" "+ip+" "+routepath)
    next();
}

module.exports.mw1=mw1;