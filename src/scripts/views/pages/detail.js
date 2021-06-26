import UrlParser from '../../routes/url-parser';
import RestaurantdbSource from '../../data/restaurantdb-source';
import { commentBoxTemplate, restaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurantContainer" class="restaurant"></div>
    <div id="commentBoxContainer" class="comment-box"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();
    const { restaurant } = await RestaurantdbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurantContainer');
    restaurantContainer.innerHTML = restaurantDetailTemplate(restaurant);
    const commentBoxContainer = document.querySelector('#commentBoxContainer');
    commentBoxContainer.innerHTML = commentBoxTemplate();
    const formCommentBox = document.getElementById('formCommentBox');
    formCommentBox.addEventListener('submit', (event) => {
      event.preventDefault();
      let payload = Object.fromEntries(new FormData(formCommentBox).entries());
      payload = { ...payload, id: restaurant.id };
      RestaurantdbSource.addReview(payload);
    });
  },
};

export default Detail;
