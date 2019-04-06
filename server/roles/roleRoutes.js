var express = require('express');
var router = express.Router();
var roleController = require("./roleController");
router.post('/', function (req, res, next) {
    console.log(req.body);
    
    roleController.addRole(req, res);
});
router.get('/', function (req, res, next) {
    // roleController.getRole(req, res);
    res.send({ status: "rolessss" })
});
router.put('/', function (req, res, next) {
    roleController.udpateRole(req, res);
});
router.delete('/:id', function (req, res, next) {
    roleController.deleteRole(req, res);
});
module.exports = router;