const User = require('../models/post');
const {
  body,
  check,
  validationResult
} = require('express-validator');



exports.getHomePage = function(req, res) {
  res.render("home");
}

exports.getRegisterPage = function(req, res) {
  res.render("register");
}
exports.renderFinalPage = function(req, res) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const alert = error.array()
    res.render('register', {
      alert
    })
  } else {
    const newUser = new User({
      name: req.body.name,
      email: req.body.username,
      password: req.body.password,
      location: req.body.location,
      company: req.body.company,
      bio: req.body.bio
    })

    newUser.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        const user = req.body.name;
        const bio = req.body.bio;
        const email = req.body.username;
        const company = req.body.company;
        const location = req.body.location;
        res.render("secrets", {
          username: user,
          userBio: bio,
          company: company,
          location: location,
          msg: "Please follow more people and create more code Repositories to improve your network"
        })
      }
    })
  };

}
exports.getLoginPage = function(req, res) {
  res.render("login", {
    errMsg: "",
    username: "",
    password: ""
  });
}

exports.FinalPage = function(req, res) {
  const username = req.body.username;
  const password = req.body.password;



  User.findOne({
    email: username
  }, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password || foundUser.followCount < 5 || foundUser.noOfRepos < 5) {

          res.render("secrets", {
            msg: "Please follow more people and create more code repositories to improve your network!!",
            username: foundUser.name,
            userBio: foundUser.bio,
            company: foundUser.company,
            location: foundUser.location
          });

        } else {
          res.render("login", {
            errMsg: "Email or password incorrect",
            username: username,
            password: password
          });
        }
      } else {
        res.render("login", {
          errMsg: "Email or password incorrect",
          username: username,
          password: password
        });
      }
    }

  })

}
