var indexModel = require("./../indexModel");
var constants = global.constants;
// var logger = require("./../component/log4j").getLogger('roleCtrl');
exports.addUser = async function(req,res){
  try {
    let role = await indexModel.roleModel.findById(req.body.role);
    if (!role) {
      return response.sendResponse(res, 400, "error", global.constants.messages.error.invalidData);
    }
    // password encrypt
    req.body.password = await global.indexComponent.utility.hashPasswordAsync(req.body.password);
    new indexModel.userModel(req.body).save(function (err) {
      if(err){
        //logger.error("addRole ", err);
        return global.response.sendResponse(res,500,"error",global.constants.messages.error.save,err);
      }
      else {
        return global.response.sendResponse(res,200,"success",global.constants.messages.success.save);
      }
    })
  } catch (e) {
    console.log(e);
  }
}
exports.getUser = function(req,res){
  try {
    var params = {
      isDelete:false,
      //type:{$in:["aa","consultant","bm"]}
    };
    if(req.query._id){
      params['_id'] = req.query._id;
    }
   
    indexModel.userModel.find(params,function(err,data){
      if(err){
        //logger.error("getRole ", err);
        return global.response.sendResponse(res,500,"error",global.constants.messages.error.get,err);
      }
      return global.response.sendResponse(res,200,"success",global.constants.messages.success.get,data);
    })

  } catch (e) {
    return global.response.sendResponse(res,500,"error",global.constants.messages.error.save,err);
    console.log(e);
    
  }
}
exports.loginUser = function(req, res) {

  try {
    var token = jwt.sign(req.user, config.token.secret, {
        expiresIn: config.token.expiry
      },

      function(token) {
        var data = {
          user: req.user,
          token: token
        }

        response.sendResponse(res, 200, "success", constants.messages.success.login, data);
      });

  } catch (e) {
    LOG.error(e);
    logger.error("login  " + e);
    response.sendResponse(res, 500, "error", constants.messages.errors.login, e);
  }
}