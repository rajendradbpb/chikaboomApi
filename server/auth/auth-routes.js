var express = require('express');
var router = express.Router();
var indexController = require("./../indexController");
var indexMiddleware = require("../indexMiddleware");

router.post('/login', global.passport.authenticate('login', {session:false}),function (req, res, next) {
    indexController.authController.loginUser(req, res);
});
/* 
* for this used needs send the token in form of bearer token under Authorization
*/
router.get('/loggedin',global.passport.authenticate('token', {session:false}), function(req,res) {
    res.status(200).json({status:"OK",user:req.user._doc});
  });
module.exports = router;