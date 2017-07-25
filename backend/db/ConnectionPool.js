var mysql=require('mysql');
 var Promise = require("promise");

exports.getConnection=function () {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test2'
    });
    connection.connect(function (error) {
        if (!!error) {
            console.log('error');
        } else {
            console.log('conncted');
        }
    });
    return connection;
}
