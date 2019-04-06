/*
* this is used to load the required modules if not loaded else return the same
*/
// var color =require("color");
var mongoose = require("mongoose");
var config = require("config");

exports.getConnection = function() {
  // dbserver, hostName, port, dbName
  if(!global.connection)
    createConnection();
  return global.connection;
}
var createConnection = function() {
  // dbserver, hostName, port, dbName
  try {

    var env = process.argv[2] && process.argv[2] || "dev";
    global.connection = mongoose.connect(config.get( env+".dbserver")+config.get(env+".hostName")+config.get(env+".port")+"/"+config.get(env+".db"));
    console.log("connection created ",config.get(env+".dbserver")+config.get(env+".hostName")+config.get(env+".port")+"/"+config.get(env+".db"));
    
  } catch (e) {
    console.log("error in getConnection ",e);
  }
}
