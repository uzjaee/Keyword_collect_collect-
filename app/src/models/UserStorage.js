"use strict"

const db = require("../config/db");


//유저의 값들을 저장하는 공간 , 유저 값을 불러오는 메서드 


class UserStorage {
    static getUserInfo(id){
       return new Promise((resolve , reject)=>{
            const query = "select * from users where id =?;"
            db.query(query,[id], (err,data)=>{
                if (err) reject(err);
                resolve(data[0]) // rowdataPacket[0]
            });
        })
        
    }
     static async save(userInfo){
        return new Promise((resolve , reject)=>{
            const query = "insert into users(id , name, psword) values (?,?,?);"
            db.query(
                query,
                [userInfo.id,userInfo.name,userInfo.psword],
                (err)=>{
                if (err) reject("아이디가 중복됩니다.");
                resolve({success : true}); // rowdataPacket[0]
            });
        })
    }
    // 탈퇴 기능 구현 필요 
}

module.exports = UserStorage;