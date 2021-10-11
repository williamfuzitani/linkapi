const { url, key } = require("../config/pipedrive");
const axios = require("axios");

class DealService {
  async getDealsWon() {
    try {
      const params = new URLSearchParams();
      params.append("status", "won");
      params.append("api_token", key);

      const response = await axios.get(`${url}/deals?${params}`);
      const { data } = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = new DealService();
