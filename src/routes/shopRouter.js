const express = require('express');
const router = new express.Router();
const shopController = require('../controllers/shop.controller');
const shopMiddleware = require('../middleware/shop.middleware');

router.get('/shops', shopController.findAllShops);

router.post('/shops', shopMiddleware.createInputValidation, shopController.insertShop);

router.delete('/shops', shopController.deleteShops);

router.get('/shops/:id', shopController.findShop);

router.put('/shops/:id',shopMiddleware.updateInputValidation,shopController.updateShop);

router.delete('/shops/:id', shopController.deleteShop);

module.exports = router;
