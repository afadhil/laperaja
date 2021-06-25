import UrlParser from '../../routes/url-parser';
import RestaurantdbSource from '../../data/restaurantdb-source';
import { restaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurantContainer" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();
    const { restaurant } = await RestaurantdbSource.detailRestaurant(url.id);
    console.log('test1 restaurant', restaurant);
    const restaurantContainer = document.querySelector('#restaurantContainer');
    restaurantContainer.innerHTML = restaurantDetailTemplate(restaurant);
  },
};

export default Detail;
