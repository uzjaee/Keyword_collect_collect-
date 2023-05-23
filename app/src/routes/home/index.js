"use strict"

const express = require('express');
const router = express.Router();
const ctrl = require("./home.ctrl")

// 전체 경로 중 get 
router.get('/',ctrl.output.home);
router.get('/dashboard',ctrl.output.dashboard);
router.get('/login',ctrl.output.login);
router.get('/register',ctrl.output.register);
router.get('/logout_process',ctrl.output.logout);

// 전체 경로 중 Post 
router.post('/login',ctrl.process.login);
router.post('/register',ctrl.process.register);
router.post('/keyword_register',ctrl.process.keyword_register);
router.post('/keywords',ctrl.process.keywords_display);
router.get('/image/keyword.png', ctrl.keywordImg);

module.exports = router;