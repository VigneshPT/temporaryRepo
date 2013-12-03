var Iconv = require('iconv').Iconv;
var request = require('request');
//var iconv = new Iconv('shift-jis', 'UTF-8//IGNORE');
//var Obj=" ‹M•û‚Ì•ž‘•‚É‚Í<I>ŒÂl“I‚È</I>Žå’£‚ª‚ ‚è‚Ü‚·‚©A‚»‚ê‚Æ‚àA<I>ƒOƒ‹[ƒv</I>‚Ìˆêˆõ‚Å‚ ‚é‚±‚Æ‚ðŽ¦‚µ‚Ä‚¢‚Ü‚·‚©H ‘å”¼‚Ì¼—ml‚É‚Æ‚Á‚ÄA•ž‘•‚ÍŽ©•ª‚ª’N‚Å‚ ‚é‚©‚ð“`‚¦‚é•û–@‚Å‚·B‚±‚ê‚É‘Î‚µ‚ÄAƒ†ƒjƒtƒH[ƒ€‚ÍAƒAƒWƒA‚Ì‘å•”•ª‚Ì’nˆæ‚Å‚æ‚­Œ©‚ç‚êAEê‚Å‚Ì’²˜a‚Ì‘åØ‚³‚ð•\\‚µ‚Ä‚¢‚Ü‚·B¢ŠE‚Ì—lX‚ÈêŠ‚É—·‚·‚éŽžAEê‚Å‚Ìƒtƒ@ƒbƒVƒ‡ƒ“KŠµ‚É‹C‚ð‚Â‚¯A“KØ‚È•ž‘•‚ð‘I‚Ô‚æ‚¤‚É‚µ‚Ü‚µ‚å‚¤B</P> <B>“ú–{‚ÆŠØ‘<BR> </B>“ú–{‚ÆŠØ‘‚Å‚ÍAƒzƒƒCƒgƒJƒ‰[‚Ì’j«]‹Æˆõ‚Íƒ_[ƒNƒX[ƒc‚É”’‚ÌƒƒCƒVƒƒƒc‚ÆƒlƒNƒ^ƒCA—«]‹Æˆõ‚Í’ÊíAƒ†ƒjƒtƒH[ƒ€‚ð’…‚Ü‚·Bƒuƒ‹[ƒJƒ‰[‚ÌŠÇ—E‚Æ˜J“­ŽÒ‚ÍA’²˜a‚ð‘£‚µ–ðE‚ÌŠu‚½‚è‚ðk‚ß‚é‚½‚ß‚ÉA‚½‚¢‚Ä‚¢“¯‚¶ƒ†ƒjƒtƒH[ƒ€‚ð’…‚Ü‚·B</P> <B><P>ƒˆ[ƒƒbƒp<BR> </B>ˆê•ûAƒtƒ‰ƒ“ƒX‚â‘¼‚Ìƒˆ[ƒƒbƒp”‘‚ÌlX‚ÍAƒtƒ@ƒbƒVƒ‡ƒ“‚ÌŒÂ«‚ð‚‚­•]‰¿‚µA‚»‚Ì•ž‘•‚Ì‘I‘ð‚ÉŒÖ‚è‚ðŽ‚Á‚Ä‚¢‚Ü‚·BŒµ‚µ‚¢•ž‘•‹K§‚ÍA‚Ü‚Æ‚Ü‚è‚Ì‚ ‚éEêŠÂ‹«‚ð‘n‚é‘ã‚í‚è‚ÉA‰X‚É‚µ‚ÄŽÐˆõ‚ÌŠÔ‚É“{‚è‚â¦‚Ý‚ð‚à‚½‚ç‚·‚±‚Æ‚É‚È‚é‚Ì‚Å‚·B</P> <B><P>ƒAƒƒŠƒJ<BR> </B>ƒAƒƒŠƒJ‚Å‚ÍAEê‚Ì•ž‘•‚Í—lX‚Å‚·Bƒ†ƒjƒtƒH[ƒ€‚àA‘g‚Ý—§‚Äƒ‰ƒCƒ“‚âƒT[ƒrƒX‹Æ‚È‚Ç‚Ìƒuƒ‹[ƒJƒ‰[‚ÌEŽí‚Å‚Í‘½­Œ©‚©‚¯‚Ü‚·‚ªAƒzƒƒCƒgƒJƒ‰[]‹Æˆõ‚Ì‘å”¼‚ÍAŽ©•ª’B‚ÌŽï–¡‚É‡‚Á‚½•ž‘•‚ð‚µAŽž‚Æ‚µ‚ÄAƒrƒWƒlƒX‚Ìó‹µ‚µ‚¾‚¢‚ÅA‚Ó‚³‚í‚µ‚¢•ž‘•‚ðŒˆ‚ß‚Ü‚·B³Ž®‚Èƒ~[ƒeƒBƒ“ƒO‚ð•p”É‚É‚¨‚±‚È‚Á‚½‚èAŠO•”‚Æ‚ÌŒðÂ‚ª‚ ‚é]‹Æˆõ‚ÍƒhƒŒƒXƒAƒbƒv‚µ‚ª‚¿‚È‚Ì‚É‘Î‚µ‚ÄA»•iŠJ”­‚âƒŠƒT[ƒ`‚ªŽå—¬‚Ì‰ïŽÐ‚Å‚ÍAŒ©‚©‚¯‚æ‚è’…S’n‚Ì‚æ‚³‚ð‹C‚É‚µ‚Ü‚·B ‚»‚ê‚ÉAƒAƒƒŠƒJ‚Ì‰ïŽÐ‚Å‚ÍÅ‹ßAƒJƒWƒ…ƒAƒ‹‚È•ž‘•‚ð’…‚éŒXŒü‚É‚ ‚èA‰ïŽÐ‚É‚æ‚Á‚Ä‚ÍA’N‚à‚ªƒJƒWƒ…ƒAƒ‹‚È•ž‘•‚ð‚µ‚Ä‚¢‚¢¢ƒJƒWƒ…ƒAƒ‹ƒfƒC£‚ðŒˆ‚ß‚Ä‚¢‚é‚Æ‚±‚ë‚à‚ ‚è‚Ü‚·B</P>";
//var Obj = "Business Wardrobe";

request({url:'http://dev3.globalenglish.com/content/202/200012/JA-JP-200012.js',encoding:'binary'},function(err,response,data){
//request('http://dev3.globalenglish.com/content/202/200012/JA-JP-200012.js',function(err,response,data){
	if (!err && response.statusCode == 200) {
		eval('var transObj='+(data).replace(/^var Obj=/,''));
		var iconv = new Iconv('shift-jis', 'UTF-8//IGNORE');
		var bodyTitle = new Buffer(transObj.BdyTitle,'binary');
		console.log(iconv.convert(bodyTitle).toString());
		//console.log(iconv.convert(transObj.Bdy).toString());
		//console.log(transObj.Title.toString());
		//console.log(transObj.BdyTitle.toString());
	}
});
//console.log(iconv.convert(Obj).toString());
// returns "a va"


