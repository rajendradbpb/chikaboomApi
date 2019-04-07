global.config.get("moduleList").forEach(moduleName => {
    console.log(`MIddleware ----- module name -> ${moduleName}\t\t Middleware Object -> ${moduleName+"Middleware"}`);
    exports[moduleName+"Middleware"] = require("./"+moduleName+"/"+moduleName+"-middleware");
});