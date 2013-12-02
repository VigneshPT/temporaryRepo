var request = require('request');
var CONSTANTS = require('./statics/constants').CONSTANTS;
var cheerio = require('cheerio');
BodyExtractor ={
	//getWholeBodyFromJs : function(classId,objectId,filename,callback){
	getWholeBodyFromJs:function(classId,objectId,continent,country,callback){
		request(CONSTANTS.baseURL+"/"+classId+"/"+objectId+"/"+objectId+".js", function(err, response, data) {
		    if(err) {
		    	console.log(err);
		    	callback(err,null);
		    }
		    if (!err && response.statusCode == 200) {
			    if(classId == 208){
			       //var body = data.match(/Bdy="(?:\.|(\\\")|[^\""\n])*"/);
			       //body = body[0].replace(/Bdy=/,'');
			       //console.log(body);
			       eval((data).replace(/Obj(?![a-z])/g,'transObj'));
			       //console.log(JSON.stringify(transObj));
			       //callback(null,transObj,filename);
			       callback(null,transObj,continent,country);
				}
				else if(classId =202){
					//var $=cheerio.load(body);
					//$('pre')
					eval('var transObj='+(data).replace(/^var Obj=/,''));
					console.log(JSON.stringify(transObj));
					//callback(null,transObj,filename);
					callback(null,transObj,continent,country);
					//callback(null,transObj.Bdy);
				}
		    }        	
		});
	}
}
module.exports.BodyExtractor = BodyExtractor;