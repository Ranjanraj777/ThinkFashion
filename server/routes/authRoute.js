const express = require('express');
const { signup, login,logout } = require('../controllers/authController');
const authenticate = require('../middlewares/auth.js');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.get('/auth', authenticate, (req, res) => {
  res.status(200).json({
    message: 'Access granted',
    user: req.user
  });
});



module.exports = router;
