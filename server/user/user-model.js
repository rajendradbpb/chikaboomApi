// var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("../../config/constants")
var roleSchema = new global.mongoose.Schema({
    type              : {type: String,unique:true,trim:true},
    api               :[ Schema.Types.Mixed],
    createdDate       : {type: Date, default: new Date()},
    isDelete          : {type: Boolean, default:false},
});
roleSchema.plugin(global.uniqueValidator, {message: "Role already exists"});
var roleModel = mongoose.model('role', roleSchema);
module.exports = roleModel;