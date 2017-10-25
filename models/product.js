// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var productSchema = new Schema({

    productId: { type: String, unique: true },
    productName: { type: String, unique: true,min:"5",max:"99" },
    productPrice: { type: Number },
    productImagePath:{type:String},
    productQuantity : {type : Number},



});

// we need to create a model for using schema
var Product = mongoose.model('product', productSchema);

// make this available to our employee in our Node applications
module.exports = Product;
