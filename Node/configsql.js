const mysql = require("mysql");
const con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"test"     //// test is the default created database in xampp
});

con.connect((err)=>{
    if(err)
    {
        console.warn("error in connection")
    }
});

module.exports =con;