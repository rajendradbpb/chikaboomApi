var indexModel = require("./../indexModel");
var constants = global.constants;
var logger = global.log4js.getLogger('auth-controller');
exports.loginUser = function (req, res) {
  // logger.debug("loginUser >>>>>>>>>>>>>>")
  try {
    var token = global.jwt.sign(req.user, config.token.secret, {
      expiresIn: config.token.expiry
    },

      function (token) {
        var data = {
          user: req.user,
          token: token
        }

        global.response.sendResponse(res, 200, "success", constants.messages.success.login, data);
      });

  } catch (e) {
    console.log(e);

    global.response.sendResponse(res, 500, "error", constants.messages.errors.login, e);
  }
}