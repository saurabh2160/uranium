
let mw1=  function(req,res,next){
    let log=true
if(log===true){
next();
}else{
    res.send({data:"something went wrong"})
}

}
module.exports.mw1=mw1;