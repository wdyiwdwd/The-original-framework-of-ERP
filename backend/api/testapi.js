var config = require('../config');
var fs = require('fs');
var path = require('path');
var Test = require('../proxy').Test;

exports.testapi = function(req, res) {
	console.log(req.session.sess)
	req.session.sess = 'yes';
	Test.addTest();
  	res.send("yes");
}