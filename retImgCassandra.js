const cassandra = require('cassandra-driver');
const cassClient = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'ddminer' });
var fs= require('fs');
var base64Img = require('base64-img');
var sys = require('util');
var exec = require('child_process').exec;
var numberOfImages = 10;


// Retrieve Query
for(var k=1; k<numberOfImages; k++){
	(function(k) {
		const query2 = 'SELECT image FROM ddminer.photo WHERE imageid=\''+k+'.jpg\'';
		cassClient.execute(query2)
		.then(result => {
		var filepath = base64Img.imgSync((result.rows[0].image).toString('base64'),'/home/ddmadmin/Downloads/Saad/google-images-master/','file'+k);
		});     
	})(k);
}



//process.exit();

