"use strict"
const fs = require('fs');
const User = require('../../models/User');
const Keyword = require('../../models/Keyword');
const KeywordStorage = require('../../models/KeywordStorage');
const e = require('express');

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
        const cookie = req.headers.cookie;
        if(!cookie){
            res.render("home/login");
        }
        else {
            res.setHeader('Set-Cookie', `id=${req.body.id};Max-age=0`);
            res.render("home/login");
        }
        
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
        console.log(response);
        if (response.success){
            console.log('일단 성공');
            res.setHeader('Set-Cookie',`id=${req.body.id}`);
            return res.json(response);
        }
        else {
            return res.json(response);
        }
        // const response = { success : true};
        // return res.json(response);
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
        const cookie = req.headers.cookie 
        if (!cookie){
            return
        } 
        const user_id = cookie.split('=')[1];
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