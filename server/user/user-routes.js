var express = require('express');
var router = express.Router();
var indexController = require("./../indexController");
router.post('/', function (req, res, next) {
    console.log(req.body);
    
    indexController.roleController.addRole(req, res);
});
router.get('/', function (req, res, next) {
    indexController.roleController.getRole(req, res);
});
router.put('/', function (req, res, next) {
    indexController.roleController.udpateRole(req, res);
});
router.delete('/:id', function (req, res, next) {
    indexController.roleController.deleteRole(req, res);
});
module.exports = router;