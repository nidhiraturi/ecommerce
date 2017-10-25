var Product = require('../models/product');
exports.getProduct = function (req, res) {



    var Id = req.params.productId;

    Product.findOne({ productId: Id }, function (error, response) {
        if (error) {
            return res.json(error)
        }
        res.json(response);
    });
}


exports.getAllProducts = function (req, res) {

    Product.find({}, function (error, response) {
        if (error) {
            return res.json(req, res, error);
        }

        res.json(response);

    });
}


exports.getProById = function (req, res) {

    var cart = [];
    var myarray = [];
    cart = req.body.item;


    cart.forEach(function (product, index, arr) {

        Product.findOne({ productId: product }, function (error, response) {

            if (error) {

                return res.json(error);
            }
            myarray.push({
                productName: response.productName, productId: response.productId, productPrice: response.productPrice
                , productImagePath: response.productImagePath, productQuantity: response.productQuantity
            })

            if (index == arr.length - 1) {

                res.json(myarray)
            }
        });


    });

}

    //find the first employee form the collection

//     for (item in cart) {

//         Product.findOne({ productId: cart[item] }, function (error, response) {
//             console.log(response.productName)
//             console.log(response.productId)
//             myarray.push({productName:response.productName,productId:response.productId,productPrice:response.productPrice})
// // myarray[item]=JSON.stringify(response)
//             // if (error) {
//             //     return res.json(error)
//             // }

//             console.log(myarray)
//         });


//     }
//     console.log(myarray)
