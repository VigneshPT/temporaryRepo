//require('require.async')(require);
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Encoder = require('node-html-encoder').Encoder;
var Constants= require('./statics/constants').CONSTANTS;
// entity type encoder
var encoder = new Encoder('entity');
var BodyExtractor = require('./bodyExtractor').BodyExtractor;


var countryMapData = Constants.countryObjectIds;
console.log(countryMapData.length);
for(var i =0;i<countryMapData.length;i++){
	console.log(i);
	var continentName= countryMapData[i].Name;
	for(var j=0;j<countryMapData[i].Countries.length;j++){
		var countryName = countryMapData[i].Countries[j].Name;
		var countryObj = countryMapData[i].Countries[j].obj;
		var filename = __dirname+"/"+continentName+"."+countryName+".json";
		//BodyExtractor.getWholeBodyFromJs(208,countryObj,filename,function(err,data,fileToWrite){
		BodyExtractor.getWholeBodyFromJs(208,countryObj,continentName,countryName,function(err,data,continent,country){
			formOutputJson(data,continent,country,function(output,continent,country,outputFile){
				var filename = __dirname+"/output/countryMap/"+continent+"."+country+".json";
				fs.writeFile(filename,JSON.stringify(output,null,2),function(err){
					if(err){
						console.log(err.message);
					}
					else{
						console.log(filename+ " saved");
					}
				});
			});
			//extractImages(data,continent,country);
		});
	}
}
var extractImages = function(data,continentName,countryName){
	var body = data.Bdy ;
	var $ = cheerio.load(body);
	var imageNumber = 1;
	$('div').find('img').each(function(i,imageTag){
		var badUrl = $(imageTag).attr('src');
		var extension = badUrl.match(/\..[^/]*$/g);
		var goodUrl = badUrl.replace(/<%.*%>/g,'http://dev3.globalenglish.com/content');
		download(goodUrl,'./output/images/'+continentName+"."+countryName+imageNumber+extension);
	});
}
var download = function(uri, filename){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    if(err){
    	console.log(err.message);
    	throw err;
    	return;
    }
    request(uri).pipe(fs.createWriteStream(filename));
  });
};
//var formOutputJson = function(data,filename,callback){
var formOutputJson = function(data,continentName,countryName,callback){
	if(data.ClassId == 208){

		/*very specific to Culture Notes by Country data from CMS */
		var outputJson = {};
		var body = data.Bdy;
		var $ = cheerio.load(body);
		outputJson.meta={};
		//to store the map image.. 
		//meta image not required now... so commenting this attribute.
		//outputJson.meta.imageSrc = $('#p0').find('img').attr('src');
		outputJson.meta.titles = [];
		var idCounter = 0;
		//to get the titles for this country
		$('#p0').find('ul').children().each(function(i,element){
			outputJson.meta.titles.push({"id":idCounter++,"title":$(element).text()});
		});
		//get outermost divs, and eliminate the first div, as its already visited in earlier step
		outputJson.articles=[];
		idCounter =0;
		$('#p0').nextAll().each(function(i,element){
			if($(element).is('div')){
				var article  = {};
				article.id = idCounter++;
				article.title = $(element).find('h1').text();
				var tempArticle = $(element).find('> div');
				var imageNumber = 0;
				$(tempArticle).find('img').each(function(index,imageTag){
					var badUrl = $(imageTag).attr('src');
					var extension = badUrl.match(/\..[^/]*$/g);
					var goodUrl = badUrl.replace(/<%.*%>/g,'http://dev3.globalenglish.com/content/');
					console.log(goodUrl);
					var imageName = continentName+"."+countryName+"."+article.id+";"+(imageNumber++)+extension;
					$(imageTag).attr('src','$serverUrl$'+imageName);
					download(goodUrl,'./output/images/'+imageName);
					//return;
				});
				article.body = $(tempArticle).html();
				outputJson.articles.push(article);
			}
		});
		/*very specific to Culture Notes by Country data from CMS */
		callback(outputJson,continentName,countryName);
		//console.log(JSON.stringify(outputJson,undefined,2));
	}
	else if(data.ClassId == 202){
		var outputJson = data.Bdy;
		callback(outputJson,continentName,countryName);
		//outputJson.meta.
	}
}
// BodyExtractor.getWholeBodyFromJs(classId,objectId,function(err,data){
// 	if(data.ClassId == 208){

// 		/*very specific to Culture Notes by Country data from CMS */
// 		var body = data.Bdy;
// 		var $ = cheerio.load(body);
// 		outputJson.meta={};
// 		//to store the map image.. 
// 		outputJson.meta.imageSrc = $('#p0').find('img').attr('src');
// 		outputJson.meta.titles = [];
// 		var idCounter = 0;
// 		//to get the titles for this country
// 		$('#p0').find('ul').children().each(function(i,element){
// 			outputJson.meta.titles.push({"id":idCounter++,"title":$(element).text()});
// 		});
// 		//get outermost divs, and eliminate the first div, as its already visited in earlier step
// 		outputJson.articles=[];
// 		idCounter =0;
// 		$('#p0').nextAll().each(function(i,element){
// 			if($(element).is('div')){
// 				var article  = {};
// 				article.id = idCounter++;
// 				article.title = $(element).find('h1').text();
// 				article.body = $(element).find('> div').html();
// 				outputJson.articles.push(article);
// 			}
// 		});
// 		/*very specific to Culture Notes by Country data from CMS */

// 		//console.log(JSON.stringify(outputJson,undefined,2));
// 	}
// 	else if(data.ClassId == 202){
// 		outputJson = data.Bdy;
// 		//outputJson.meta.
// 	}
// 	console.log(JSON.stringify(outputJson,undefined,2));
// });

// 	 <data name="notSupported" xml:space="preserve">
//     <value>offline is not supported for your browser.</value>
//   </data>
//   <data name="downloadSuccess" xml:space="preserve">
//     <value>Your &lt;do_not_translate&gt; has been successfully downloaded. You can now disconnect from the Internet.</value>
//   </data>
//   <data name="downloadComplete" xml:space="preserve">
//     <value>Download completed</value>
//   </data>