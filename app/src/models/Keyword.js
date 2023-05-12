"use strict"

const KeywordStorage = require("./KeywordStorage");



// 키워드의 저장 및 수정을 담당하는 클래스 

class Keyword{
    constructor(body){
        this.body = body;
    }
    async register(){
        const client = this.body;
        try {
            const response = await KeywordStorage.save(client);
            return response;
        }catch (err) {
            return  {success: false , msg : err};
        }
    }
}


module.exports =Keyword;