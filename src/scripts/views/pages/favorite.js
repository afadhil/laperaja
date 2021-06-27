import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { restaurantItemTemplate, noDataTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 id="contentHeading">Favorited Restaurant</h2>
      <div id="restaurantsContainer" class="restaurants">
 
      </div>
    </div>
 `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurantsContainer');
    const contentHeading = document.querySelector('#contentHeading');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += restaurantItemTemplate(restaurant);
      });
    } else {
      contentHeading.remove();
      restaurantsContainer.innerHTML = noDataTemplate();
    }
  },
};

export default Like;
