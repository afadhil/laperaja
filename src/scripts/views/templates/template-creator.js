import CONFIG from '../../globals/config';

const restaurantItemTemplate = (restaurant) => `
<a href="/#/detail/${restaurant.id}" class="card">
      <figure>
        <img src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="suasana restaurant ${
  restaurant.name
}" tabindex="0">
        <span tabindex="0">Rating: <strong>${restaurant.rating}</strong> | Kota: <strong>${
  restaurant.city
}</strong></span>
      </figure>
      <article>
        <h3 tabindex="0">${restaurant.name}</h3>
        <p tabindex="0">${restaurant.description}</p>
      </article>
    </a>
`;

const restaurantDetailTemplate = (restaurant) => `
  <img class="restaurant__image" src="${
  restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}" alt="suasana restaurant ${restaurant.name}" tabindex="0">
  <article class="restaurant__article">
    <h2>${restaurant.name}</h2>
    <div class="restaurant__detail">
      <p>${restaurant.description}</p>
      <p><label>Kota:</label> ${restaurant.city}</p>
      <p><label>Alamat:</label> ${restaurant.address}</p>
      <p><label>Kategori:</label>${restaurant.categories.map((categorie) => ` ${categorie.name}`)}</p>
      <p><label>Rating:</label> ${restaurant.rating}</p>
      <p><label>Makanan:</label>${restaurant.menus.foods.map((food) => ` ${food.name}`)}</p>
      <p><label>Minuman:</label>${restaurant.menus.drinks.map((drink) => ` ${drink.name}`)}</p>
    </div>
    <label>Reviews:</label>
    <ul class="restaurant__review">
      ${restaurant.customerReviews.map((customer) => `
        <li>
          <div>
            <p>${customer.name},</p>
            <small>${customer.date}</small>
            <p>${customer.review}</p>
          </div>
        </li>
      `).join('')}
    </ul>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restaurantItemTemplate,
  restaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
