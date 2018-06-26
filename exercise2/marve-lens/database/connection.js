var mongoose = require('mongoose');

module.exports.connect = function(database) {
	mongoose.connect(database);
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(){
	  console.log("Database Connection Succeeded!");
	});
	return db;
}