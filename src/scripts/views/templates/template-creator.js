import CONFIG from '../../globals/config';

const commentBoxTemplate = () => `
  <label for="formCommentBox">Add Comment</label>
  <form id="formCommentBox" class="comment-box__form" autocomplete="off">
    <input name="name" type="text" placeholder="Name" />
    <textarea name="review" placeholder="Comment"></textarea>
    <button type="submit">Submit</button>
  </form>
`;

const favoriteButtonTemplate = () => `
  <button aria-label="favoritkan restoran ini" id="favoriteButton" class="favorite">
     <span>Favorite Me!&nbsp</span>
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const favoritedButtonTemplate = () => `
  <button aria-label="hapus restoran ini dari favorit" id="favoriteButton" class="favorite">
    <span>Favorited&nbsp</span>
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const noDataTemplate = () => `
  <div class="content middle">
    <h2>Oops! No data provided</h2>
  </div>
`;

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
    <section class="restaurant__detail">
      <p>${restaurant.description}</p>
      <p><label>Kota:</label> ${restaurant.city}</p>
      <p><label>Alamat:</label> ${restaurant.address}</p>
      <p><label>Kategori:</label>${restaurant.categories.map((categorie) => ` ${categorie.name}`)}</p>
      <p><label>Rating:</label> ${restaurant.rating}</p>
      <p><label>Makanan:</label>${restaurant.menus.foods.map((food) => ` ${food.name}`)}</p>
      <p><label>Minuman:</label>${restaurant.menus.drinks.map((drink) => ` ${drink.name}`)}</p>
    </section>
    <label for="restaurantReview">Reviews:</label>
    <ul id="restaurantReview" class="restaurant__review">
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

export {
  commentBoxTemplate,
  favoriteButtonTemplate,
  favoritedButtonTemplate,
  noDataTemplate,
  restaurantItemTemplate,
  restaurantDetailTemplate,
};
