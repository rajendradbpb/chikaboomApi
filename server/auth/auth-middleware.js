
let indexModel = require("./../indexModel");
let indexComponent = require("../indexComponent");

// passport init
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
/*
  * this is used to check the user in the database existence
  used in case of the signIn and signUp user
*/
global.passport.use('login', new LocalStrategy(
    function(username,password, done) {
      console.log("login instercepter  ",username,password);
      indexModel.userModel.findOne({"username":username}).populate('role').exec(function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        // console.log("got user/pass",username,password);
        // console.log("got user/pass >>>>>>>",user.username,user.password);
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
//
//
global.passport.use('token', new BearerStrategy(
    function (token, done) {
        jwt.verify(token, config.token.secret, function (err, decoded) {
            if (err) {
                console.log("error in verify token  ", err);
                return done(err, null);
            }
            else if (!decoded) {
                console.log("No  token  ", err);
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
global.passport.use('superAdmin', new BearerStrategy(
    function (token, done) {
        jwt.verify(token, config.token.secret, function (err, decoded) {
            if (err) {
                //console.log("error in verify token  ",err);
                return done(err, null);
            }
            else if (!decoded) {
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