"use strict"
const fs = require('fs');
const User = require('../../models/User');
const Keyword = require('../../models/Keyword');
const KeywordStorage = require('../../models/KeywordStorage');

// view 를 컨트롤 하는 controller 


// 화면에 출력되는 내용 
const output = {
     home : (req,res)=> {
        res.render("home/keyword_home");
    },
    dashboard : (req,res)=>{
        res.render("home/dashboard")
    },
     login :(req,res) => {
        res.render("home/login");
    },
    register:(req,res) =>{
        res.render("home/register");
    },
    logout:(req, res) => {
        res.setHeader('Set-Cookie', `id=${req.body.id};Max-age=0`);
        res.redirect('/');
    }
}

// 프론트에서 요청시 서버내에서 처리하는 내용 
const process = {
    login: async (req, res) =>{
        const user = new User(req.body);
        const response = await user.login();
        if (response.success){
            res.setHeader('Set-Cookie',`id=${req.body.id}`);
        }
        return res.json(response);
    },
    register: async(req,res) =>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
    keyword_register: async(req,res)=>{
        const keyword = new Keyword(req.body);
        const response = await keyword.register();
        return res.json(response);
    },
    keywords: async(req,res)=>{
        const user_id = req.headers.cookie.split('=')[1];
        const keyword =await KeywordStorage.getKeywordInfo(user_id);
        // console.log(keyword,typeof(keyword));
         res.send(keyword);
    }
};
const keywordImg = (req,res) => {
    fs.readFile('./src/public/image/keyword.png',(err,data) =>{
        if(err) { res.send()  }
        res.send(data);
    })
}

module.exports = {
    output,
    process,
    keywordImg
}