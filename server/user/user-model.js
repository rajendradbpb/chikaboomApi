// var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("../../config/constants")
var userSchema = new global.mongoose.Schema({
    role: { type: Schema.Types.ObjectId, ref: 'role', required: true },
    username: { type: String, unique: true, required: constants.messages.error.username },
    password: { type: String, required: constants.messages.error.undefinedPassword },
    email: { type: String },
    mobile: { type: String,required:true ,minlength:10,maxlength:10},
    firstName: { type: String },
    lastName: { type: String },
    isDelete:{type:Boolean,default:false}
});
userSchema.plugin(global.uniqueValidator, { message: "User already exists" });
var userModel = mongoose.model('user', userSchema);
module.exports = userModel;