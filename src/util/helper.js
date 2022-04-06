let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let printdate = function(){
    console.log(date+" "+month+" "+year)
}
let printmonth = function(){
    console.log(month)
}
let batch = function(){
    console.log("uranium, W3D1, the topic for today is Nodejs module system")
}

module.exports.printdate=printdate;
module.exports.newmonth=printmonth;
module.exports.printbatch=batch;
