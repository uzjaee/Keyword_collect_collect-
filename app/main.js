"use strict"

const express = require('express');
const app =express();
const cookieParser = require('cookie-parser');


//라우팅 
const home = require("./src/routes/home");


// 앱 세팅 
app.set("views", "./src/views");
app.set("view engine","ejs");
app.use(express.static(__dirname + '/src/public'));
app.use(cookieParser());
// 미들웨어 등록 
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use("/",home);


module.exports = app;




