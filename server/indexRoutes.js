var express = require('express');
var path = require('path');
var router = express.Router();
// var roleRoutes = require('./role/role-routes');

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, './../public/index.html'));
});

//dynamic routes
global.config.get("moduleList").forEach(moduleName => {
    router.use('/'+moduleName,  require('./'+moduleName+'/'+moduleName+'-routes'));
    console.log(`Routes ----- module name -> ${moduleName}\t\t router file -> ${moduleName+'-routes'}`);
});
// router.use('/role', roleRoutes);
// router.use('/user', userRoutes);


module.exports = router;