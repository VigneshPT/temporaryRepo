var XMLWriter = require('xml-writer')
var Constants= require('./statics/constants').CONSTANTS;
var fs = require('fs');
var encoding = require('encoding');
var iconv = require('iconv-js');
var request = require('request');
createXMLNode = function(xmlWriter,name, value){
	xmlWriter.startElement('data').
		writeAttribute('name',name).
		writeAttribute('xml:space','preserve').
		writeElement('value',value).
	endElement();
}
//console.log(xw.toString());

var topicObjs = Constants.topicObjectIds;
var revLangMap = Constants.reverseLangMap;


var topicLoop = function(xmlWriter,writeStream,resxLang,legacyLang,topicObj){
	for(var j=0;j<topicObjs[i].Topics.length;j++){ //loop through each topic inside category

			topicObj.Topics[j].legacyLang=legacyLang;
			topicObj.Topics[j].resxLang = resxLang;
			var url = '';
			if(legacyLang!="")
				url = Constants.baseURL+"/202/"+topicObj.Topics[j].obj+"/"+topicObj.Topics[j].legacyLang+"-"+topicObj.Topics[j].obj+".js";
			else
				url = Constants.baseURL+"/202/"+topicObj.Topics[j].obj+"/"+topicObj.Topics[j].obj+".js";
			console.log(url);
			var isLastTopic = j==(topicObj.Topics.length-1);
			request({
				'url':url,
				'encoding':'binary',
				'headers':{'Content-Type': 'text/html,application/xhtml+xml,application/xml;charset=shift-jis'}
				},(function(topicData,xmlWriter,writeStream,isLastTopic){
				return function(err,response,data){

					if(err) {
			    		console.log(err);

				    }
				    if (!err && response.statusCode == 200) {

							eval('var transObj='+(data).replace(/^var Obj=/,''));
							console.log(iconv.fromSJIS(transObj.Bdy).toString());
							createXMLNode(xmlWriter,topicData.Name+"Title",transObj.Title);
							createXMLNode(xmlWriter,topicData.Name+"Btitle",transObj.BdyTitle);
							createXMLNode(xmlWriter,topicData.Name+"Bdy", transObj.Bdy);
							if(isLastTopic){
								//ws.end();
								xmlWriter.endElement();
								xmlWriter.endDocument();
							}

				    }
				}
			})(topicObj.Topics[j],xmlWriter,writeStream,isLastTopic));

		}
}

var initLoop = function(xmlWriter,writeStream,resxLang,legacyLang){
	//make request to baseUrl/202/93023/FR-FR-93023.js for each objectId
	for(var i = 0;i<topicObjs.length;i++){ //loop each category
		var categoryName = topicObjs[i].Name;
		topicLoop(xmlWriter,writeStream,resxLang,legacyLang,topicObjs[i]);
		/*for(var j=0;j<topicObjs[i].Topics.length;j++){ //loop through each topic inside category

			topicObjs[i].Topics[j].legacyLang=legacyLang;
			topicObjs[i].Topics[j].resxLang = resxLang;
			var url = '';
			if(legacyLang!="")
				url = Constants.baseURL+"/202/"+topicObjs[i].Topics[j].obj+"/"+topicObjs[i].Topics[j].legacyLang+"-"+topicObjs[i].Topics[j].obj+".js";
			else
				url = Constants.baseURL+"/202/"+topicObjs[i].Topics[j].obj+"/"+topicObjs[i].Topics[j].obj+".js";
			console.log(url);
			var isLastTopic = j==(topicObjs[i].Topics.length-1);
			request({
				'url':url,
				'encoding':'binary',
				'headers':{'Content-Type': 'text/html,application/xhtml+xml,application/xml;charset=shift-jis'}
				},(function(topicData,xmlWriter,writeStream,isLastTopic){
				return function(err,response,data){

					if(err) {
			    		console.log(err);

				    }
				    if (!err && response.statusCode == 200) {

							eval('var transObj='+(data).replace(/^var Obj=/,''));
							console.log(iconv.fromSJIS(transObj.Bdy).toString());
							createXMLNode(xmlWriter,topicData.Name+"Title",transObj.Title);
							createXMLNode(xmlWriter,topicData.Name+"Btitle",transObj.BdyTitle);
							createXMLNode(xmlWriter,topicData.Name+"Bdy", transObj.Bdy);
							if(isLastTopic){
								//ws.end();
								//xmlWriter.endElement();
								xmlWriter.endDocument();
							}

				    }
				}
			})(topicObjs[i].Topics[j],xmlWriter,writeStream,isLastTopic));

		}*/
	}
}
for(var k = 0;k<revLangMap.length;k++){
	//make resx for each language
	

	var resxLang = Object.keys(revLangMap[k]);
	var legacyLang = revLangMap[k][Object.keys(revLangMap[k])];
	console.log(legacyLang);
	var resxFilename='';
	if(resxLang!="en")
		resxFilename =__dirname+"/output/TopicResx/CultureNotesTopics."+resxLang+".resx"; 
	else
		resxFilename = __dirname+"/output/TopicResx/CultureNotesTopics.resx";

	var ws = fs.createWriteStream(resxFilename);
	xw = new XMLWriter(true,(function(ws){
		return function(string,encoding){
			ws.write(string,encoding);
		};
	})(ws));
	xw.startDocument();
	xw.startElement('root');
	initLoop(xw,ws,resxLang,legacyLang);
	// xw = new XMLWriter(true,function(string,encoding){
	// 	ws.write(string,encoding);
	// 	initLoop(xw,ws);
	// });	
}

var getDataFromCMS = function(topicData,callback){
//topicData.Name, and topicData.obj, topicData.legacyLang, topicData.resxLang
	request(Constants.baseURL+"/202/"+topicData.obj+"/"+topicData.legacyLang+"-"+topicData.obj+".js",(function(scopedTopicData){
		return function(err,response,data){
			if(err) {
	    		console.log(err);
	    		callback(err,null,scopedTopicData);
		    }
		    if (!err && response.statusCode == 200) {
					eval('var transObj='+(data).replace(/^var Obj=/,''));
					console.log(JSON.stringify(transObj));
					
					callback(null,transObj,scopedTopicData);
					
		    }
		}
	})(topicData));

}
