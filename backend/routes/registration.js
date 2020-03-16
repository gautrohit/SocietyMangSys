const router = require('express').Router();
const bcrypt = require('bcrypt');
let Registration = require('../models/registration.model');

router.route('/add').post((req, res) => {
  // const today = new Date()
  const userRegistration = {
    mobileNo: req.body.mobileNo,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    flatAddress: req.body.flatAddress
  };
  console.log(userRegistration.mobileNo);

  Registration.findOne({
    mobileNo: req.body.mobileNo
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userRegistration.password = hash;
          Registration.create(userRegistration)
            .then(user => {
              res.json({ status: user.mobileNo + ' Registered!' });
            })
            .catch(err => {
              res.send('error: ' + err);
            });
        });
      } else {
        res.json({ error: 'User already exists' });
      }
    })
    .catch(err => {
      res.send('error: ' + err);
    });
});

// router.route('/').get((res, req) => {
//     Registration.find()
//     .then(registration => res.json(registration))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {

//     const newRegistration = new Registration({ mobileNo, firstName, lastName, email, password, confirmPassword, flatAddress });

//     newRegistration
//       .save()
//       .then(() => res.json('User added!'))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

module.exports = router;
