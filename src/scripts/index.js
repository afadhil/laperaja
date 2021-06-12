import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const hamburgerBtn = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");

hamburgerBtn.addEventListener("click", event => {
  drawerElement.classList.toggle("open");
  console.log(drawerElement.classList)
  event.stopPropagation();
});

mainElement.addEventListener("click", event => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
})
