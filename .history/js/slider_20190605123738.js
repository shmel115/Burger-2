/*const left = document.querySelector("#left");
const right = document.querySelector("#rigyt");
const items = document.querySelector("#items");

const minRight = 0;
const maxRight = 176.25;
const step = 58.75;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function() {
  if(currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "rem";
  }
});

left.addEventListener("click", function() {
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "rem";
  }
});
}*/

$(document).ready(function() {
  /*Hamburger menu*/
  let hamburger = (options => {
    let button = document.querySelector(options.button);
    let menu = document.querySelector(options.menu);
    let body = document.querySelector("body");

    let itemsList = document.getElementById("nav__list_hamburger").children;
    itemsList = Array.prototype.slice.call(itemsList);

    const items = $(".nav__item", menu);
    let counter = 0;

    let startMenuAnimation = function startMenuAnimation() {
      let item = items.eq(counter);
      item.toggleClass("slideInUp");
      counter++;
      if (counter < items.length) {
        setTimeout(startMenuAnimation, 100);
      }
      if (counter === items.length) counter = 0;
    };

    let _toggleMenu = function(e) {
      button.classList.toggle("is-active");
      menu.classList.toggle("is-active");
      body.classList.toggle("locked");
      startMenuAnimation();
    };

    var closeMenu = function closeMenu() {
      button.classList.remove("is-active");
      menu.classList.remove("is-active");
      body.classList.remove("locked");
      startMenuAnimation();
    };

    let addListeners = function() {
      button.addEventListener("click", _toggleMenu);

      for (i = 0; i < itemsList.length; i++) {
        itemsList[i].addEventListener("click", closeMenu);
      }
    };

    document.addEventListener("keydown", function(e) {
      if (e.keyCode == 27) closeMenu();
    });

    return {
      init: addListeners
    };
  })({
    button: "#hamburger-menu-link",
    menu: "#hamburger-menu"
  });

  hamburger.init();
