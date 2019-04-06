var indexModel = require("./../indexModel");
var constants = global.constants;
// var logger = require("./../component/log4j").getLogger('roleCtrl');
exports.addRole = function(req,res){
  try {
    new indexModel.roleModel(req.body).save(function (err) {
      if(err){
        //logger.error("addRole ", err);
        return global.response.sendResponse(res,500,"error",global.constants.messages.error.save,err);
      }
      else {
        return global.response.sendResponse(res,200,"success",global.constants.messages.success.save);
      }
    })

  } catch (e) {
    //logger.error("addRole ", e);
  }
}
exports.getRole = function(req,res){
  try {
    var params = {
      isDelete:false,
      //type:{$in:["aa","consultant","bm"]}
    };
    if(req.query._id){
      params['_id'] = req.query._id;
    }
    if(req.query.type){
      params['type'] = req.query.type;
    }
    indexModel.roleModel.find(params,function(err,data){
      if(err){
        //logger.error("getRole ", err);
        return global.response.sendResponse(res,500,"error",global.constants.messages.error.get,err);
      }
      return global.response.sendResponse(res,200,"success",global.constants.messages.success.get,data);
    })

  } catch (e) {
    //logger.error("getRole ", e);
  }
}
exports.udpateRole = function(req,res){
  try {
    var query = {
      "_id":req.body._id
    }
    delete req.body['_id'];
    var options = {new:true};
    indexModel.roleModel.findOneAndUpdate(query, req.body,options).exec()
    .then(function(data) {
      return global.response.sendResponse(res,200,"success",global.constants.messages.success.udpateRole,data);
    })
    .catch(function(err) {
      //logger.error("udpateRole ", err);
      return global.response.sendResponse(res, 500,"error",global.constants.messages.error.udpateRole,err);
    })

  } catch (e) {
    //logger.error("udpateRole ", e);
  }
}
exports.deleteRole = function(req,res){
  try {
    var query = {
      "_id":req.params.id
    }
    delete req.body['_id'];
    indexModel.roleModel.findOneAndUpdate(query,{"isDelete":true},{"new" :true},function(err,data) {
      if(err){
        // logger.error("deleteRole ", err);
        return global.response.sendResponse(res,500,"error",global.constants.messages.errors.deleteRole,err);
      }
      else
      return global.response.sendResponse(res,200,"success",global.constants.messages.success.deleteRole);
    })

  } catch (e) {
    // logger.error("deleteRole ", e);
  }
}