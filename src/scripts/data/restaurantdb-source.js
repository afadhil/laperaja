import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantdbSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview(payload) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        id: payload.id,
        name: payload.name,
        review: payload.review,
      }),
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': CONFIG.TEST_KEY,
      },
    };
    await fetch(API_ENDPOINT.ADD_REVIEW, options);
    window.location.reload();
  }
}

export default RestaurantdbSource;
