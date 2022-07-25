const shopService = require('../services/shop.service');

class ShopController {
  // List all shops
  async findAllShops(req, res, next) {
    try {
      const shops = await shopService.getShops();
      res.status(200).send(shops);
    } catch (e) {
      next(e);
    }
  }
  // Create a new shop
  async insertShop(req, res, next) {
    try {
      const createdShop = await shopService.createShop(req.body);
      res.status(201).send(createdShop);
    } catch (e) {
      next(e);
    }
  }

  // Delete all shops
  async deleteShops(req, res, next) {
    try {
      const deletedShops = await shopService.deleteShops();
      res.status(204).send();
    } catch (e) {
      next(e);
    }
  }

  // Find shop by id
  async findShop(req, res, next) {
    try {
      const shop = await shopService.findShop(parseInt(req.params.id));
      res.status(200).send(shop);
    } catch (e) {
      next(e);
    }
  }

  // Update shop by id
  async updateShop(req, res, next) {
    try {
      const updateShop = await shopService.updateShop(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).send(updateShop);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  // Delete shop by id
  async deleteShop(req, res, next) {
    try {
      const deletedShop = await shopService.deleteShop(parseInt(req.params.id));
      res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ShopController();
