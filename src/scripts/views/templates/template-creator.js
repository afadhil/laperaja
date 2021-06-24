import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="card">
      <figure>
        <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="suasana restaurant ${
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
    </div>
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

export { createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
