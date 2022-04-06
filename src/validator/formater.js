let trimer = function(){
    var str = "      functionUp"
	console.log(str.trim());
}
let lower = function(){
    var str = "FUNCTIONUP"
	console.log(str.toLowerCase())
}
let upper = function() {
	var str = "functionUp"
	console.log(str.toUpperCase());
}

module.exports.trimCon=trimer;	
module.exports.lwrCse=lower;
module.exports.uprcse=upper;

