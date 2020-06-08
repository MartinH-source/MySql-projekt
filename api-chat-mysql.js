const dateFormat = require('dateformat');
const mysql = require("mysql");

//vytvoreni pripojeni na databazi
con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "vertrigo",
    database: "pokusy"
});

//pripojeni na databazi
con.connect();

exports.apiChat = function (req, res, obj) {
    if (req.pathname.endsWith("/list")) {

//SQL dotaz
        con.query(`SELECT * FROM zpravy`,
            function(err, rows){
                if (err) {
                    console.error(err);
                } else {
                    //zpracovani vysledku SQL dotazu
                    console.log(rows);
                    obj.messages = rows;
                    res.end(JSON.stringify(obj));
                }
            }
        );


    } else if (req.pathname.endsWith("/add")) {

//SQL dotaz
        con.query("INSERT INTO zpravy (id, time, nickname, message) VALUES (NULL, '"+dateFormat(new Date(), "dd.mm.yyyy HH:MM:ss")+"', '"+req.parameters.nick+"', '"+req.parameters.msg+"')",
            function(err, rows){
                if (err) {
                    console.error(err);
                } else {
                    //zpracovani vysledku SQL dotazu
                    console.log(rows);
                    res.end(JSON.stringify(obj));
                }
            }
        );


        // let obj = {};
        // obj.message = req.parameters.msg; //text zpravy z parametru msg
        //  obj.nickname = req.parameters.nick;
        //   obj.time = dateFormat(new Date(), "dd.mm.yyyy HH:MM:ss");
        //  msgs.push(obj);
    }
};