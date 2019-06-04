const left = document.querySelector("#left");
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
  }
}

}