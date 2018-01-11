const cassandra = require('cassandra-driver');
const cassClient = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'ddminer' });
var fs= require('fs');
var base64Img = require('base64-img');
var sys = require('util');
var exec = require('child_process').exec;
var numberOfImages = 10;

for(var j=1; j<numberOfImages; j++){
	(function(j) {
		var base64data = base64Img.base64Sync('/home/ddmadmin/Downloads/Saad/google-images-master/'+j+'.jpg');
		// Insert CQLSH query 
		var query1 = 'INSERT INTO ddminer.photo (imageid, image) VALUES (:imageid, :image)';
		var params = { imageid: j+'.jpg', image:base64data};
		cassClient.execute(query1, params);
	})(j);
}


//process.exit();	

