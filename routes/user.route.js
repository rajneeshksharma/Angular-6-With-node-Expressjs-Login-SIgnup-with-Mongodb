const express = require('express');
const app = express();
const userRoutes = express.Router();

let AllUser = require('../models/AllUsers');

// userRoutes.post('/add',function(req,res,next) {
//   console.log("dffffffffffffffffffffffffff:",req.body.name);
// });


userRoutes.route('/add').post(function (req, res) {
    let allUser = new AllUser(req.body);
    allUser.save()
      .then(game => {
      res.status(200).json({'allUser': 'AdUnit in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
  

  userRoutes.route('/').get(function (req, res) {
      AllUser.find(function (err, allUser){
      if(err){
        console.log(err);
      }
      else {
        res.json(allUser);
      }
    });
  });

userRoutes.route('/login').post(function(req,res){
let email = req.body.email;
let password = req.body.password;
var query = { email : email };
var query2 = { password : password };
AllUser.findOne(query).then(function(user){
  if(user){
    if(user.password == password) {
      console.log("success");
    }
  } else{
    console.log("Invalid user name or password");
  }

});
if(AllUser.findOne(query)){
  console.log('user valid');
}
else{
  console.log("user invalid");
}
})


  module.exports = userRoutes;