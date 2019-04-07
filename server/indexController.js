global.config.get("moduleList").forEach(moduleName => {
    console.log(`Controller ----- module name -> ${moduleName}\t\t Controller Object -> ${moduleName+"Controller"}`);
    exports[moduleName+"Controller"] = require("./"+moduleName+"/"+moduleName+"-controller");
});