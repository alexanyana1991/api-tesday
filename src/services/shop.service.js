const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const {
  EntityError,
  NotFoundError,
  DuplicateError,
} = require('../error/error');

class ShopService {
  // List all shops
  async getShops() {
    const shopsList = await prisma.shop.findMany();
    return shopsList;
  }

  // Create shop
  async createShop(data) {
    const shopExist = await prisma.shop.findUnique({
      where: {
        url,
      },
    });
    if (shopExist) throw new EntityError();

    const createShop = await prisma.shop.create({
      data: {
        ...data,
      },
    });
    return createShop;
  }

  // Delete all shops
  async deleteShops() {
    const deleteShops = await prisma.shop.deleteMany();
    await prisma.$queryRaw`ALTER TABLE Shop AUTO_INCREMENT = 1`;
    return deleteShops;
  }

  // Find shop by id
  async findShop(id) {
    const shopExist = await prisma.shop.findUnique({
      where: {
        id,
      },
    });
    if (!shopExist) throw new NotFoundError();
    return shopExist;
  }

  // Update shop by id
  async updateShop(id, data) {
    const shopExist = await prisma.shop.findUnique({
      where: {
        id,
      },
    });
    if (!shopExist) throw new NotFoundError();

    const duplicateValues = Object.values(shopExist).some(
      (r) => Object.values(data).indexOf(r) >= 0
    );

    if (duplicateValues) {
      throw new DuplicateError();
    }

    const updateShop = await prisma.shop.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return updateShop;
  }

  // Delete shop by id
  async deleteShop(id) {
    const shopExist = await prisma.shop.findUnique({
      where: {
        id,
      },
    });
    if (!shopExist) throw new NotFoundError();
    const deleteShop = await prisma.shop.delete({
      where: {
        id,
      },
    });
    await prisma.$queryRaw`ALTER TABLE Shop AUTO_INCREMENT = 1`;
    return deleteShop;
  }
}

module.exports = new ShopService();
