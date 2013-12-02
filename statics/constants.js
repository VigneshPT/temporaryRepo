module.exports.CONSTANTS = {
	baseURL: "http://dev3.globalenglish.com/content",
	langMap:[ 
        {"EN":""},
		{"DE-DE":"de"},
        {"ES-ES":"es-ES"},
        {"ES-MX":"es-MX"},
        {"PT-BR":"pt"},
        {"FR-FR":"fr"},
        {"IT-IT":"it"},
        {"JA-JP":"ja"},
        {"ZH-CN": "zh-CN"},
        {"ZH-TW": "zh-TW"},
        {"KO-KO": "ko"},
        {"RU-RU": "ru"},
        {"TR-TR": "tr"},
        {"CZ-CZ": "cs"},
        {"PL-PL": "pl"}
    ],
    reverseLangMap:[
        {"en":""},
    	{"de":"DE-DE"},
        {"es-ES":"ES-ES"},
        {"es-MX":"ES-MX"},
        {"pt":"PT-BR"},
        {"fr":"FR-FR"},
        {"it":"IT-IT"},
        {"ja":"JA-JP"},
        {"zh-CN":"ZH-CN"},
        {"zh-TW":"ZH-TW"},
        {"ko":"KO-KO"},
        {"ru":"RU-RU"},
        {"tr":"TR-TR"},
        {"cs":"CZ-CZ"},
        {"pl":"PL-PL"}
    ],
    //for culture notes [by country], the object id's 
    countryObjectIds:[
    	{"id":"0","Name":"NoAm", "Countries": [{"obj":"227081","Name":"Cana"},{"obj":"228793","Name":"Cost"},{"obj":"227096","Name":"Mexi"},{"obj":"227338","Name":"Uniteds"}]},
		{"id":"1","Name":"SoAm", "Countries": [{"obj":"227070","Name":"Arge"},{"obj":"227075","Name":"Braz"},{"obj":"228790","Name":"Chil"},{"obj":"228798","Name":"Vene"}]},
		{"id":"2","Name":"EUR", "Countries": [{"obj":"227074","Name":"Belg"},{"obj":"227082","Name":"Czec"},{"obj":"228795","Name":"Denm"},{"obj":"227083","Name":"Finl"},{"obj":"227084","Name":"Fran"},{"obj":"227086","Name":"Germ"},{"obj":"228796","Name":"Hung"},{"obj":"227090","Name":"Irel"},{"obj":"227092","Name":"Ital"},{"obj":"227097","Name":"Neth"},{"obj":"227099","Name":"Norw"},{"obj":"227102","Name":"Pola"},{"obj":"227103","Name":"Roma"},{"obj":"227104","Name":"Russ"},{"obj":"227286","Name":"Spai"},{"obj":"227330","Name":"Swed"},{"obj":"227331","Name":"Swit"},{"obj":"227335","Name":"Ukra"},{"obj":"227337","Name":"Unitedk"}]},
		{"id":"3","Name":"ASIA", "Countries": [{"obj":"227077","Name":"Chin"},{"obj":"227088","Name":"Hong"},{"obj":"227089","Name":"Indi"},{"obj":"228797","Name":"Indo"},{"obj":"227091","Name":"Isra"},{"obj":"227093","Name":"Japa"},{"obj":"227094","Name":"Kaza"},{"obj":"227095","Name":"Malay"},{"obj":"227101","Name":"Phil"},{"obj":"227106","Name":"Saud"},{"obj":"227107","Name":"Sing"},{"obj":"227233","Name":"Kore"},{"obj":"227333","Name":"Taiw"},{"obj":"227334","Name":"Thai"},{"obj":"231404","Name":"Turk"},{"obj":"227336","Name":"Unit"}]},
		{"id":"4","Name":"AFR", "Countries": [{"obj":"231341","Name":"Egyp"},{"obj":"227098","Name":"Nige"},{"obj":"227108","Name":"Southa"}]},
		{"id":"5","Name":"AUST", "Countries": [{"obj":"227073","Name":"Austra"}]}
    ],
    topicObjectIds:[
        {"id":"0","Name":"BizA","Topics": [{"Name":"BizAn1","obj":"200082"},{"Name":"BizAn2","obj":"200085"}]},
        {"id":"1","Name":"CL","Topics": [{"Name":"CLn1","obj":"200012"}]},
        {"id":"2","Name":"COM","Topics": [{"Name":"COMn1","obj":"200037"},{"Name":"COMn2","obj":"200041"},{"Name":"COMn3","obj":"200042"},{"Name":"COMn4","obj":"200043"},{"Name":"COMn5","obj":"200044"},{"Name":"COMn6","obj":"200047"}]},
        {"id":"3","Name":"FIN", "Topics":[{"Name":"FINn1","obj":"200079"},{"Name":"FINn2","obj":"200086"}]},
        {"id":"4","Name":"HR", "Topics": [{"Name":"HRn1","obj":"200083"}]},
        {"id":"5","Name":"GG", "Topics": [{"Name":"GGn1","obj":"200048"},{"Name":"GGn2","obj":"200049"},{"Name":"GGn3","obj":"200051"},{"Name":"GGn4","obj":"200052"}]},
        {"id":"6","Name":"GandI", "Topics": [{"Name":"GandIn1","obj":"200058"},{"Name":"GandIn2","obj":"200056"},{"Name":"GandIn3","obj":"200057"},{"Name":"GandIn4","obj":"200073"}]},
        {"id":"7","Name":"MKT","Topics": [{"Name":"MKTn1","obj":"200080"},{"Name":"MKTn2","obj":"200084"}]},
        {"id":"8","Name":"MLS","Topics": [{"Name":"MLSn1","obj":"200038"},{"Name":"MLSn2","obj":"200040"},{"Name":"MLSn3","obj":"200039"},{"Name":"MLSn4","obj":"200045"},{"Name":"MLSn5","obj":"200046"},{"Name":"MLSn6","obj":"200050"}]},
        {"id":"9","Name":"MwP","Topics": [{"Name":"MwPn1","obj":"200059"},{"Name":"MwPn2","obj":"200060"},{"Name":"MwPn3","obj":"200061"},{"Name":"MwPn4","obj":"200062"},{"Name":"MwPn5","obj":"200064"},{"Name":"MwPn6","obj":"200065"}]},
        {"id":"10","Name":"MNY","Topics": [{"Name":"MNYn1","obj":"200074"}]},
        {"id":"11","Name":"TPHO","Topics": [{"Name":"TPHOn1","obj":"200075"},{"Name":"TPHOn2","obj":"200067"}]},
        {"id":"12","Name":"TIME","Topics": [{"Name":"TIMEn1","obj":"200081"},{"Name":"TIMEn2","obj":"200076"},{"Name":"TIMEn3","obj":"200068"},{"Name":"TIMEn4","obj":"200069"},{"Name":"TIMEn5","obj":"200070"}]},
        {"id":"13","Name":"TRV","Topics": [{"Name":"TRVn1","obj":"200071"},{"Name":"TRVn2","obj":"200077"}]}
    ]
}