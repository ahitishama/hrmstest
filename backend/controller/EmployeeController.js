var EmployeeService = require('../services/employee/EmployeeService');
var ReadUtil = require('../util/ReadUtil');
//search by name
exports.searchByName = function (req, resp) {

  if (ReadUtil.checkIfNULLOrUndefined(req.params.empName)) {
    resp.send("empName is missing in request param");
  }
  var result = EmployeeService.searchByName(req.params.empName);

  result.then(function (singleEmpRecord) {
    // resolve(singleEmpRecord);
    resp.send(singleEmpRecord);
  }).catch(function (e) {
    console.log(e.stack);
    // reject(e);
  });


}

//delete single records

exports.delete = function (req, resp) {


  var result = EmployeeService.delete(req.params.empId);
  result.then(function (singleEmpRecord) {
    // resolve(singleEmpRecord);
    resp.send("1 record deleted");
  }).catch(function (e) {
    console.log(e.stack);
    // reject(e);
  });


}


//update controller

exports.update = function (req, resp) {

  var result = EmployeeService.update(req);
  result.then(function (singleEmpRecord) {
    // resolve(singleEmpRecord);
    resp.send("1 record update");
  }).catch(function (e) {
    console.log(e.stack);
    // reject(e);
  });
  console.log("updated called !!!!!");
}


//for add controller

exports.add = function (req, resp) {

  var result = EmployeeService.add(req);
  result.then(function (singleEmpRecord) {
    // resolve(singleEmpRecord);
    resp.send("1 record inserted");
  }).catch(function (e) {
    console.log(e.stack);
    // reject(e);
  });
  console.log("add called !!!!!");
}


//search single record
exports.searchById = function (req, resp) {


  if (ReadUtil.checkIfNULLOrUndefined(req.params.empId)) {
    resp.send("empId is missing in request param");
  }

  var result = EmployeeService.searchById(req.params.empId);

  result.then(function (singleEmpRecord) {
    // resolve(singleEmpRecord);
    resp.send(singleEmpRecord);
  }).catch(function (e) {
    console.log(e.stack);
    // reject(e);
  });


}


//search all recordsController
exports.search = function (req, resp) {
  console.log("EmployeeService>search");
  ///  var id = req.getParamater("id");

  var result = EmployeeService.search();
  result.then(function (rows) {
    for (var i = 0; i < rows.length; i++) {
      console.log("employee Name->", rows[i].Emp_Name);
    }
    // resolve(rows);
    resp.send(rows);
  }).catch(function (e) {
    console.log(e.stack);
    // reject(e);
  });
  console.log("controller exits !!!!   ");
}






