console.log("********** loading controllers by Module **************");
global.config.get("moduleList").forEach(moduleName => {
    console.log(`module name -> ${moduleName}\t\t Controller Object -> ${moduleName+"Controller"}`);
    exports[moduleName+"Controller"] = require("./"+moduleName+"/"+moduleName+"-controller");
});
// exports.roleCtrl = require("./role/role-controller");