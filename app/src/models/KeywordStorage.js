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
                    if (err) reject("키워드 등록 중 에러 발생")
                    resolve({success :true});
                });
        })
    }
    static duplicate_check(KeywordInfo){
        return new Promise((resolve, reject)=>{
            const query = "select exists(select * from keyword_requests where keyword_nm =? and user_id = ?)as exist; "
            db.query(
                query,
                [KeywordInfo.keyword_name,KeywordInfo.user_id],
                (err,data)=>{
                    if(err) reject('중복 체크 중 에러 발생')
                    resolve(data)
                });
        }) 
    }
}

module.exports =KeywordStorage;