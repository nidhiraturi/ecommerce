//Import required module
var Customer = require('../models/customerRegistered');
//Import required module
var CustomerBill = require('../models/customerBill');

// export the postuser method
exports.postUser = function (req, res) {
  // creating the new customer
  var customer = new Customer({
    name: req.body.name,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    userName: req.body.userName,
    password: req.body.password
  
  });

  //save the creating customer
  customer.save(function (error, response) {
    // handle the error
    if (error) {
      return error;
    }
    else {
      //send the response to the browser
      res.json({
        success: true,
        body: response
      });
    }
  }); // end of save method
} // end of postuser method

exports.postCustomerBill = function (req, res) {
  // creating the new customer
  console.log("in bill")
  var customerBill = new CustomerBill({
    name: req.body.name,
    total1: req.body.total1,
    
  
  });

  customerBill.save(function (error, response) {
    // handle the error
    console.log("savingg bill.....");

    if (error) {
      return error;
    }
    else {
      //send the response to the browser
      res.json({
        success: true,
        body: response
      });
    }
  }); // end of save method
} // 

exports.postUsername = function (req, res) {
  // creating the new employee
  username1 = req.body.userName;
  password1 = req.body.password;
  //finding customer
  Customer.findOne({ userName: username1, password: password1 }, function (err, response) {
    if (err) {
      res.json(err);
    }
    if (response) {
      res.json({
        "status": true,
        "respData": {
          "data": response
        }
      });
    }
    else {
      res.json({
        "status": false,
        "respData": {
          "data": "user does not exist"
        }
      });
    }
}); // end of save method
} // end of postuser method


//export getAllEmployee method
exports.getAllCustomers = function (req, res) {
  Customer.find({}, function (error, response) {
    if (error) {
      return res.json(req, res, error);
    }
    //sending the reponse to the browser
    res.json(response);

  });
}










