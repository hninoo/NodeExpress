var express = require('express');
var router = express.Router();

const authMiddleware = require('../middlewares/jwt.middleware');

var authController = require('../controllers/AuthController');

router.post('/register',authController.register);
router.post('/login',authController.login);
router.get('/profile', authMiddleware.checkToken, authController.getUser)


module.exports = router;