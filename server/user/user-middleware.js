var indexModel = require("./../indexModel");
exports.preRegdPost = async function (req, res, next) {
    try {
        let role = await indexModel.roleModel.findOne({ type: global.constants.appConstants.ROLE_CHILD });
        req.body.role = role._id;
        next();
    }
    catch (e) {
        next(e);
    }
}
exports.preRegdAdmin = async function (req, res, next) {
    try {
        if (!req.body.username)
            return global.response.sendResponse(res, 402, "error", global.constants.messages.error.invalidData + ": username");
        if (!req.body.password)
            return global.response.sendResponse(res, 402, "error", global.constants.messages.error.invalidData + ": password");
        if (!req.body.role)
            return global.response.sendResponse(res, 402, "error", global.constants.messages.error.invalidData + ": role");
        next();
    }
    catch (e) {
        next(e);
    }
}