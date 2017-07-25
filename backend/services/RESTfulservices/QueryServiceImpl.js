var ConnectionPool = require('../../db/ConnectionPool');


var ConnectionPool = require('../../db/ConnectionPool');

var connection =ConnectionPool.getConnection();

exports. search=function (query,functionCallback) {
    try {
        connection.query(query,functionCallback );
    } catch (error) {
        console.log(error);
        functionCallback(error);
    }
}

exports.update=function (query,functionCallback) {
    try {
        connection.query(query,functionCallback );
    } catch (error) {
        console.log(error);
        functionCallback(error);
    }
}

