import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default DicodingRestaurantSource;
