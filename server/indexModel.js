global.config.get("moduleList").forEach(moduleName => {
    console.log(`Model ----- module name -> ${moduleName}\t\t Model Object -> ${moduleName+"Model"}`);
    exports[moduleName+"Model"] = require("./"+moduleName+"/"+moduleName+"-model");
});