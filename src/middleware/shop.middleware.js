const shopSchema = require('../validators/shop.schema');
const { ValidationError } = require('../error/error');

class ShopMiddleware {
  // Validation of request body
  async validateShop(req, res, next) {
    try {
      await shopSchema.validate({ body: req.body });
      next();
    } catch (e) {
      next(new ValidationError());
    }
  }
}

module.exports = new ShopMiddleware();
