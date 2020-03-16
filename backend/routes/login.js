// const router = require('express').Router();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// let Registration = require('../models/registration.model');

// router.route('/login').post((req, res) => {
//   Registration.findOne({
//     mobileNo: req.body.mobileNo
//   })
//     .then(user => {
//       if (user) {
//         if (bcrypt.compareSync(req.body.password, user.password)) {
//           // Passwords match
//           const payload = {
//             _id: user._id,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             mobileNo: user.mobileNo
//           };
//           // let token = jwt.sign(payload, process.env.SECRET_KEY, {
//           //   expiresIn: 1440
//           // })
//           res.send(token);
//         } else {
//           // Passwords don't match
//           res.json({ error: 'User does not existgfghhh' });
//         }
//       } else {
//         res.json({ error: 'User does not exist' });
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err);
//     });
// });

// module.exports = router;
