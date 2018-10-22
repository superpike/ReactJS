const express = require('express');
let ObjectID = require('mongodb').ObjectID;
const ProductModel = require('../models/products');
const QuickProductModel = require('../models/quickProducts');

let router = express.Router();

//Получение постов
router.get('/', function (req, res, next) {
    ProductModel.find({}, function (err, products) {
        if(err){
            return next(err);
        }
        res.json(products);
    });
});

router.get('/quick', function (req, res, next) {
    QuickProductModel.find({}, function (err, quickProducts) {
        if(err){
            return next(err);
        }
        res.json(quickProducts);
    });
});

router.get('/delete/:idProduct', function (req, res, next) {
    //Получаем параметр
    let idProduct = req.params.idProduct;
    ProductModel.findByIdAndDelete(idProduct, function (err,data) {
        if(err){
            return next(err);
        }
        res.json(data);
    });
    // res.json(req.params);
});

module.exports = router;