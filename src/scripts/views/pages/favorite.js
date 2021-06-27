import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { restaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Favorited Restaurant</h2>
      <div id="restaurantsContainer" class="restaurants">
 
      </div>
    </div>
 `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurantsContainer');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
