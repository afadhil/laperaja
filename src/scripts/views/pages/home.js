import RestaurantdbSource from '../../data/restaurantdb-source';
import { restaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="hero">
      <h1 class="ts-light" tabindex="0">Laper?</h1>
      <h2 class="ts-light" tabindex="0">cari disini aja</h2>
      <a href="#contentSection" class="ts-light">cek resto yuk!</a>
    </section>
    <section id="contentSection" class="content">
      <h2 tabindex="0">Temukan resto favoritmu!</h2>
      <div id="restaurantsContainer" class="restaurants"></div>
    </section> 
    `;
  },

  async afterRender() {
    const { restaurants } = await RestaurantdbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurantsContainer');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
