//import the required modules
var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customerController');
var productController=require('../controllers/productController');


//api for posting the data of employee
router.route('/v1/Customer/create')
    .post(customerController.postUser);

//api for getting the all employees from the db
router.route('/v1/getAllCustomers')
    .get(customerController.getAllCustomers);
//api to find user with username
router.route('/v1/getCustomer')
    .post(customerController.postUsername);

    router.route('/v1/getallproducts')
    .get(productController.getAllProducts);




    //api for getting the product data from its id
router.route('/v1/getProduct/:productId')
.get(productController.getProduct);

router.route('/v1/getProductById')
.post(productController.getProById);






//export the router
module.exports = router;
