var express = require('express');
// var http = require('http');
var EmployeeController = require('../controller/EmployeeController');
var app = express();
var parser = require('body-parser')

app.use(parser.json()); // support json encoded bodies
app.use(parser.urlencoded({ extended: true })); // support encoded bodies


app.route('/search/employee').get(EmployeeController.search);
app.route('/search/employee/id/:empId').get(EmployeeController.searchById);
app.route('/add/employee').post(EmployeeController.add);
app.route('/update/employee/').post(EmployeeController.update);
app.route('/delete/employee/:empId').post(EmployeeController.delete);

//search by name
app.route('/search/employee/name/:empName').get(EmployeeController.searchByName);






app.listen(1337, function () {
    console.log("listing port:1337");
});