/*
* this is used to load the required modules if not loaded else return the same
*/
// var color =require("color");
var mongoose = require("mongoose");
var config = require("config");

exports.getConnection = function () {
  // dbserver, hostName, port, dbName
  if (!global.connection)
    createConnection();
  return global.connection;
}
var createConnection = function () {
  // dbserver, hostName, port, dbName
  try {
    //ex - 'mongodb://localhost:27017/animals'
    //mongodb://<dbuser>:<dbpassword>@ds031618.mlab.com:31618/goapps-chikaboom
    var env = process.argv[2] && process.argv[2] || config.get("env") ;
    console.log("*************   " + env + "   ***************");
    switch (env) {
      case "local":
        global.connection = mongoose.connect(config.get(config.get("env") + ".dbserver") + config.get(config.get("env") + ".hostName") + config.get(config.get("env") + ".port") + "/" + config.get(config.get("env") + ".db"));
        break;

      case "unit":
        global.connection = mongoose.connect(config.get(env + ".dbserver") + config.get(env + ".username") + ":" + config.get(env + ".password") + "@" + config.get(env + ".hostName") + config.get(env + ".port") + "/" + config.get(env + ".db"));
        break;
      case "prod":
        global.connection = mongoose.connect(config.get(env + ".dbserver") + config.get(env + ".username") + ":" + config.get(env + ".password") + "@" + config.get(env + ".hostName") + config.get(env + ".port") + "/" + config.get(env + ".db"));
        break;
    }
    // global.connection = mongoose.connect(config.get( env+".dbserver")+config.get( env+".username")+":"+config.get( env+".password")+"@"+config.get(env+".hostName")+config.get(env+".port")+"/"+config.get(env+".db"));
    // console.log("connection created ",config.get( env+".dbserver")+config.get( env+".username")+":"+config.get( env+".password")+"@"+config.get(env+".hostName")+config.get(env+".port")+"/"+config.get(env+".db"));

  } catch (e) {
    console.log("error in getConnection ", e);
  }
}
