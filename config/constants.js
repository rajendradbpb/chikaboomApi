var config = require('config');
var constants = {
  debug:true,
  appConstants:{
    ROLE_CHILD:"child",
    ROLE_ADMIN:"admin",
    GENDER_MALE:"male",
    GENDER_FEMALE:"female",

  },
  roles:['admin','state-admin','district-admin','vle'],
  userStatus:['active','pending','inactive'],
  blockTypes:['GP','URBAN'],
  urbanTypes:['Municipality','Nsc','Others'],
  messages:{
    error:{
      //global
      "save"   : "Error in saving data",
      "get"   : "Error in fetch data",
      "invalidData" : "Invalid data", // generic
      "changePassword" : "Error in change password",
      "saveJob"   : "save Job Failure",
      "saveData"   :"save Data Error",
      "getData"   :"Get Data Error",
      "updateData"   :"Update Data Error",
      "deleteData"   :"Delete Data Error",
      "userUnAuthorised"   :"User not authorised",
      "username"   :"username already Exists",
      "undefinedPassword":"Password not defined",
      "saveState":"error in saving state",
      "getState":"error in get state",
      "deleteState":"error in Delete state",
      },
    success:{
      //global
      "save"   : "data saved successfully",
      "get"   : "Data Fetched successfully",
      "changePassword" : "password change success",
      "saveJob"   : "save Job Success",
      "saveData"   :"save Data Success",
      "getData"   :"Get Data Success",
      "updateData"   :"Update Data Success",
      "deleteData"   :"Delete Data Success",
      "verified":"verified",
      "getData"   :"get Data Success",
      "getUser"                     :"Success in fething user details",
      "saveUser"                 : "Success in saving user",
      "saveState":"success in saving state",
      "getState":"success in get state",
      "deleteState":"success in Delete state",
    },
  },

}
module.exports = constants;
