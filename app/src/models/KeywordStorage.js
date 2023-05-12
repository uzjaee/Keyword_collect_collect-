const db = require("../config/db");


// 디비와 연결하여 키워드 정보를 저장하는 클래스 

class KeywordStorage {
     static async getKeywordInfo(user_id){
        return new Promise((resolve , reject)=>{
            const query = "select * from keyword_requests where user_id=?;"
            db.query(query,[user_id],(err,data)=>{
                if (err) reject(err);
                resolve(data) // rowdataPacket[0]
            });
        })
    }
    static async save(KeywordInfo){
        return new Promise((resolve, reject)=>{
            const query = "insert into keyword_requests (keyword_nm ,keyword_cnt,user_id)values (?, ?,?);"
            db.query(
                query,
                [KeywordInfo.keyword_name,KeywordInfo.keyword_count,KeywordInfo.user_id],
                (err)=>{
                    if (err) reject("키워드가 중복됩니다.")
                    resolve({success :true});
                });
        })
    }
}

module.exports =KeywordStorage;