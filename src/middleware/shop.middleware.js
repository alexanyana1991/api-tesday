const {createshopSchema, updateshopSchema} = require('../validators/shop.schema');
const { ValidationError } = require('../error/error');

class ShopMiddleware {
  //Create validation of request body
  async createInputValidation(req, res, next) {
    try {
      await createshopSchema.validate({ body: req.body });
      next();
    } catch (e) {
      next(new ValidationError());
    }
  }

  // validation of request body
  async updateInputValidation(req, res, next) {
    try {
      await updateshopSchema.validate({ body: req.body });
      next();
    } catch (e) {
      next(new ValidationError());
    }
  }
}

module.exports = new ShopMiddleware();
