const mysql = require("mysql");

const db =mysql.createConnection({
    host : "127.0.0.1",
    user :"root",
    password: "dydwo753",
    database : "keyword_collect"
});

db.connect();

module.exports =db;
