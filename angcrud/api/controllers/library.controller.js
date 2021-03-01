// Define Contro 
// Created By Pramod Kumar
const Library = require('../models/library.model');


exports.library_create = function (req, res,next) {
    const {bookName,authorName,authorEmail,publishOn} = req.body;
    let library = new Library(
        {
          bookName,
          authorName,
          authorEmail,
          publishOn
        }
    );
    try{
      library.save(function (error, data) {
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
exports.library_details = function (req, res,next) {
    Library.findById(req.params.id, function (err, library) {
        if (err) return next(err);
        res.send(library);
    })
};
// get library detail by email
exports.library_byEmail = function (req, res,next) {
    Library.find({authorEmail:req.params.authorEmail}, function (err, library) {
        if (err) return next(err);
        res.send(library);
    })
};

exports.library_getAll = function (req, res,next) {
    Library.find({}, function (err, library) {
        if (err) return next(err);
        res.send(library);
    })
};

exports.library_update = function (req, res,next) {
    Library.findByIdAndUpdate(req.params.id, {$set: req.body},
        function (err, library) {
            if (err) return next(err);
          res.status(200).json({
        msg: "library Updated successfully"
      });

        });
};

exports.library_delete = function (req, res,next) {
   // console.log(`Delete ID== ${req.params.id}`);
   Library.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
};