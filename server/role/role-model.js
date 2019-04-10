// var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var roleSchema = new global.mongoose.Schema({
    type: {
        type: String, unique: true, trim: true,
        enum: [global.constants.appConstants.ROLE_CHILD, global.constants.appConstants.ROLE_ADMIN]
    },
    api: [Schema.Types.Mixed],
    createdDate: { type: Date, default: new Date() },
    isDelete: { type: Boolean, default: false },
});
const enumOptions = {};
roleSchema.plugin(global.enumValues, enumOptions);
roleSchema.plugin(global.uniqueValidator, { message: "Role already exists" });
var roleModel = mongoose.model('role', roleSchema);
module.exports = roleModel;