var express = require('express');
var router = express.Router();
var indexController = require("./../indexController");
var indexMiddleware = require("../indexMiddleware");
router.post('/', function (req, res, next) {
    indexController.userController.addUser(req, res);
});
router.get('/', function (req, res, next) {
    indexController.userController.getUser(req, res);
});
router.put('/', function (req, res, next) {
    indexController.userController.udpateUser(req, res);
});
router.delete('/:id', function (req, res, next) {
    indexController.userController.deleteUser(req, res);
});
router.post('/login', passport.authenticate('login', {session:false}),function (req, res, next) {
    indexController.userController.loginUser(req, res);
});
module.exports = router;