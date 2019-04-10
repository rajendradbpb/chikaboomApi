// var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("../../config/constants");
var userSchema = new global.mongoose.Schema({
    role: { type: Schema.Types.ObjectId, ref: 'role' },
    mobile: { type: String,unique:true,required:true ,minlength:10,maxlength:10},
    username: { type: String },
    password: { type: String },
    // child details
    age: { type: Number },
    gender: { type: String,enum: ['male','female'], },
    school: { type: String },
    grade: { type: String },
    
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    isDelete:{type:Boolean,default:false}
});

const enumOptions = {};
userSchema.plugin(global.enumValues, enumOptions);
userSchema.plugin(global.uniqueValidator, { message: "User already exists" });
var userModel = mongoose.model('user', userSchema);
module.exports = userModel;