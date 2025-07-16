const express = require('express');
const { signup, login, logout } = require('../controllers/auth.controllers');
const router = express.Router();

router.post('/signup',signup)
router.post('/signin',login)
router.get('/logout',logout)

module.exports = router;