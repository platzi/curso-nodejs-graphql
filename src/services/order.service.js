const boom = require('@hapi/boom');
const { models } = require('../db/sequelize');

class OrderService {

  constructor(){
  }

  async create(data) {
    const customer = await models.Customer.findByPk(data.customerId);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const product = await models.Product.findByPk(data.productId);
    if (!product) {
      throw boom.notFound('product not found');
    }
    const order = await models.Order.findByPk(data.orderId);
    if (!order) {
      throw boom.notFound('order not found');
    }
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async findByUser(userId) {
    const orders = await models.Order.findAll({
      where: {
        '$customer.user.id$': userId
      },
      include: [
        {
          association: 'customer',
          include: ['user']
        }
      ]
    });
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    if (!order) {
      throw boom.notFound('order not found');
    }
    return order;
  }

  async update(id, changes) {
    const order = await this.findOne(id);
    const rta = await order.update(changes);
    return rta;
  }

  async delete(id) {
    const order = await this.findOne(id);
    await order.destroy();
    return { id };
  }

}

module.exports = OrderService;
