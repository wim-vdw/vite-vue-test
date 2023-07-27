import axios from 'axios';

export class StarwarsClient {
  constructor(baseURL) {
    this.instance = axios.create({ baseURL: baseURL, timeout: 1000 });
  }

  async callAPI(endpoint) {
    try {
      const response = await this.instance.get(endpoint);
      return {
        status: 'OK',
        data: response.data,
      };
    } catch (error) {
      return {
        status: 'Not OK',
        error: error,
      };
    }
  }
}
