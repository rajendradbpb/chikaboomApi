var express = require('express');
app = express();
require("./server/bootstrap")(); // set global variables
app.use(global.jsonParser);

// initilising routes
var indexRoutes = require('./server/indexRoutes');
app.use('/', indexRoutes);


global.connectionFactory.getConnection();
// swagger
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.all('/*', function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS

  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization');

  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
// view engine setup
app.set('views', global.path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(global.favicon(global.path.join(__dirname, 'public', 'favicon.ico')));
app.use(global.morgan('dev'));
app.use(global.jsonParser);
app.use(global.urlencodedParser);
app.use(global.cookieParser());
app.use(express.static(global.path.join(__dirname, 'public')));


// passport init
/* 
app.use(global.passport.initialize());
app.use(global.passport.session());
global.passport.serializeUser(function (user, done) {
  done(null, user._id);
});

global.passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

var LocalStrategy = require('passport-local').Strategy;
var BearerStrategy = require('passport-http-bearer').Strategy;

global.passport.use('login', new LocalStrategy(
  function(username,password, done) {
    console.log("login instercepter  ",username,password);
    userModel.findOne({"username":username}).populate('role').exec(function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      global.passwordHash(password).verifyAgainst(user.password,function(error, verified) {
        //console.log("after verification ",error,user);
        if (error) {
          console.log("error");
          return done(err); }
        else if (!verified) {
           console.log("not verified");
          return done(null, false); }
        else return done(null, user);
      })
    });
  }
)
);





global.passport.use('token',new BearerStrategy(
  function(token, done) {
    global.jwt.verify(token,config.token.secret, function(err, decoded) {
      if (err) {
        console.log("error in verify token  ",err);
        return done(err,null);
      }
      else if(!decoded) {
        console.log("No  token  ",err);
        return done(null, false);
      }
      else {
         // console.log("yes  token  ",decoded);
         console.log("token true");
        return done(null, decoded);
      }
     });

  }
));


global.passport.use('superAdmin',new BearerStrategy(
  function(token, done) {
    global.jwt.verify(token,config.token.secret, function(err, decoded) {
      if (err) {
        //console.log("error in verify token  ",err);
        return done(err,null);
      }
      else if(!decoded) {
        // console.log("No  token  ",err);
        return done(null, false);
      }
      else {
        // console.log("yes  token  ",decoded);
        return done(null, decoded);
      }
     });

  }
));
 */

// app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  // logger.error(err);
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // logger.error(err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
