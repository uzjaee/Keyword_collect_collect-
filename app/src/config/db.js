const mysql = require("mysql");

// aws rdb 

const db =mysql.createConnection({
host : "keyword-collect.cqzunarpsfzn.ap-northeast-2.rds.amazonaws.com",
user :"admin",
password: "dydwo753",
database : "keyword_collect"
});

db.connect();

module.exports =db;



// 개인 db 

// const db =mysql.createConnection({
//     host : "127.0.0.1",
//     user :"root",
//     password: "dydwo753",
//     database : "keyword_collect"
// });

// db.connect();

// module.exports =db;
