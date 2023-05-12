"user strict"
// 유저의 기능을 담당하는 클래스 생성 


const UserStorage = require("./UserStorage")

class User {
    constructor(body){
        this.body = body;
    }
    async login() {
        const client = this.body;
        try { 
            const user = await UserStorage.getUserInfo(client.id);
            if (user){
                if(user.id ===client.id && user.psword === client.psword){
                    return { success: true};
                }
                return { success : false , msg :"비밀번호가 틀렸습니다."}
            }
            return { success :false ,msg : "존재하지 않는 아이디입니다."}
        }catch(err){
            return {success : false , msg : error};
        }
        
     }
    async register(){
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        }catch (err) {
            return  {success: false , msg : err};
        }
    }   
    
}

module.exports =User