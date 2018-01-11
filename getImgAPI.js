const GoogleImages = require('google-images');
var sys = require('util');
var exec = require('child_process').exec;

const googleClient = new GoogleImages('016929928504015843981:rquttvufa18', 'AIzaSyCcMU35ttb1Hh8F29hWG9GjMDbEQOKNoQ0');

for(var i=1; i<22; i++){
	(function(i) {
		googleClient.search('warkop').then(function (images){
			
			function puts(error, stdout, stderr) {sys.puts(stdout)}
			exec("wget -O \""+i+".jpg\" \""+images[i].url+"\"",puts);
		
		});
	})(i);
}


//process.exit();
