"use strict"

const KeywordStorage = require("./KeywordStorage");



// 키워드의 저장 및 수정을 담당하는 클래스 

class Keyword{
    constructor(body){
        this.body = body;
    }
    async register(){
        const client = this.body;
        try 
        {
            const duplicate_check = await KeywordStorage.duplicate_check(client); // 키워드 중복 확인 
            if((duplicate_check[0].exist)){
                return {success : false , msg :'키워드가 중복됩니다.'}
            }
            const response = await KeywordStorage.save(client); // 키워드 저장 
            return response;
        }
        catch (err) 
        {
            return  {success: false , msg : err};
        }
    }
}
   



module.exports =Keyword;