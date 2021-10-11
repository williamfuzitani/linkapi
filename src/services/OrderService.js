const { url, key } = require("../config/bling");
const { orderFactory, convertObjectToXml, sumPropInArray } = require("../utils");
const OrderRepository = require("../repositories/OrderRepository");
const axios = require("axios");
const _ = require("lodash");

class OrderService {
  async getAll() {
    try {
      return await OrderRepository.getAll();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async create(order) {
    try {
      return await OrderRepository.create(order);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async createOrders(deals) {
    try {
      const dealsByDay = _.chain(deals)
        .groupBy(function (deal) {
          return new Date(deal.won_time).toISOString().substr(0, 10);
        })
        .map((values, date) => ({ date: date, total_value: sumPropInArray(values, "value") }))
        .value();

      const promises = dealsByDay.map(async (order) => {
        return await this.create(order);
      });

      return await Promise.all(promises);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async createOnBling({ name, unitPrice }) {
    try {
      const order = orderFactory({ name, unitPrice });
      const xml = convertObjectToXml(order);

      const params = new URLSearchParams();
      params.append("apikey", key);
      params.append("xml", xml);

      const response = await axios.post(`${url}/pedido/json/?${params}`);
      const { data } = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async createOrdersOnBling(deals) {
    const promises = deals.map(async (deal) => {
      return await this.createOnBling({ name: deal.person_name, unitPrice: deal.value });
    });

    return await Promise.all(promises);
  }
}

module.exports = new OrderService();
