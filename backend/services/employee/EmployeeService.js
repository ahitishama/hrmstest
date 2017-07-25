//var QueryServiceImpl = require('../RESTfulservices/QueryServiceImpl');
var Promise = require("promise");
var ConnectionPool = require('../../db/ConnectionPool');
var connection = ConnectionPool.getConnection();

////search by name
exports.searchByName = function (empName) {
    return new Promise(function (resolve, reject) {
        connection.query("select * from employee where Emp_Name like '%" + empName + "%'", function (err, rows, fields) {
            if (err) {
                return reject(err);
            } else {
                console.log("rsolve rows" + rows[0].Emp_Name)
                return resolve(rows[0]);
            }

        }); // query
    });
}

//delete single record 

exports.delete = function (empId) {

    return new Promise(function (resolve, reject) {

        connection.query("delete from employee where Emp_Id='" + empId + "'", function (err, rows, fields) {

            if (err) {
                return reject(err);
            } else {
                // console.log("rsolve rows" + rows[0].Emp_Name)
                return resolve(rows[0]);
            }

        }); // query
    });
}

//update single records

exports.update = function (req) {

    return new Promise(function (resolve, reject) {
        var employee = {
            "Emp_Id": req.body.Emp_Id,
            "Emp_Name": req.body.Emp_Name,
            "Role_Id": req.body.Role_Id,
            "Dept_Id": req.body.Dept_Id
        }
        console.log("Emp_Id  " + employee.Emp_Id)
        var sql = "UPDATE employee SET ? WHERE Emp_Id ='" + employee.Emp_Id + "'";
        connection.query(sql, employee, function (err, rows, fields) {

            if (err) {
                return reject(err);
            } else {
                return resolve(rows[0]);
            }

        }); // query
    });
}



//Add single record

exports.add = function (req) {
    return new Promise(function (resolve, reject) {
        var employee = {
            "Emp_Name": req.body.Emp_Name,
            "Role_Id": req.body.Role_Id,
            "Dept_Id": req.body.Dept_Id
        }
        connection.query("INSERT INTO employee set ?", employee, function (err, rows, fields) {

            if (err) {
                return reject(err);
            } else {
                // console.log("rsolve rows" + rows[0].Emp_Name)
                return resolve(rows);
            }

        }); // query
    }); // Promise
} // getDepartments







//search single records

exports.searchById = function (empId) {

    return new Promise(function (resolve, reject) {

        connection.query("select * from employee where Emp_Id='" + empId + "'", function (err, rows, fields) {

            if (err) {
                return reject(err);
            } else {
                // console.log("rsolve rows" + rows[0].Emp_Name)
                return resolve("<i>"+rows[0].Emp_Name+"</i>");
            }

        }); // query
    });
}

//search all records

exports.search = function () {
    return new Promise(function (resolve, reject) {

        connection.query("select * from employee", function (err, rows, fields) {

            if (err) {
                return reject(err);
            } else {
                // console.log("rsolve rows" + rows[0].Emp_Name)
                return resolve(rows);
            }

        }); // query
    }); // Promise
} // getDepartments


