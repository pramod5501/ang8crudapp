// Define Contro 
// Created By Pramod Kumar
const User = require('../models/user.model');


exports.user_create = function (req, res,next) {
    const {first_name,last_name,email,phone} = req.body;
    let user = new User(
        {
            firstName:first_name,
            lastName:last_name,
            email,
            phone
        }
    );
    try{
         user.save(function (error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
     }catch(err) {
     return next(err)
   }
   
};
exports.user_details = function (req, res,next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};
// get user detail by email
exports.user_byEmail = function (req, res,next) {
    User.find({email:req.params.email}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_getAll = function (req, res,next) {
    User.find({}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res,next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body},
        function (err, user) {
            if (err) return next(err);
          res.status(200).json({
        msg: "User Updated successfully"
      });

        });
};

exports.user_delete = function (req, res,next) {
   // console.log(`Delete ID== ${req.params.id}`);
   User.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
};