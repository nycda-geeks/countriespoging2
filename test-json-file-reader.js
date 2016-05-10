var filesystem = require('fs')

function unicornParse (file, callback) {
filesystem.readFile(file, function(err, data){
	if (err) {
		console.log("error")
		}
		var parsedfile = JSON.parse(data)

		callback(parsedfile)
})

}

module.exports = {
	unicornParse: unicornParse
}