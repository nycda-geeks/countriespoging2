var fs = require('fs');
var input = process.argv[2]
var filereader = require('./test-json-file-reader.js')


filereader.unicornParse('countries.json', function (parsedfile){
	for (var i=0; i<parsedfile.length; i++) {

		if (parsedfile[i].name == input){

			console.log("name: " + parsedfile[i].name);
			console.log("top Level Domain: " + parsedfile[i].topLevelDomain)
			
		}
	}
})
	
	




