import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

const hamburgerBtn = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");

hamburgerBtn.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");
  console.log(drawerElement.classList);
  event.stopPropagation();
});

mainElement.addEventListener("click", (event) => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
});

let listRestaurant = "";
data.restaurants.forEach(
  (item) =>
    (listRestaurant += `
    <div class="card">
      <figure>
        <img src="${item.pictureId}" alt="suasana restaurant ${item.name}">
        <span>Rating: <strong>${item.rating}</strong> | Kota: <strong>${item.city}</strong></span>
      </figure>
      <article>
        <p>Name: ${item.name}</p>
        <p>Description: ${item.description}</p>
      </article>
    </div>
  `)
);
document.querySelector("#card-restaurants").innerHTML = listRestaurant;
