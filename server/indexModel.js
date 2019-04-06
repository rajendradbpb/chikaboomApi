// exports.roleModel = require("./role/role-model");
console.log("********** loading Models by Module **************");
global.config.get("moduleList").forEach(moduleName => {
    console.log(`module name -> ${moduleName}\t\t MOdel Object -> ${moduleName+"Model"}`);
    exports[moduleName+"Model"] = require("./"+moduleName+"/"+moduleName+"-model");
});