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
  
window.onload = function(){
const blockList = document.querySelector('.block-list')
          
              blockList.addEventListener('click', function (e) {
                e.preventDefault()
                  if (e.target.className === 'block-list__title') {
                      e.target.parentElement.classList.toggle('active')
                      const itenId = localStorage.getItem('itenId')
                      localStorage.setItem('itenId', e.target.parentElement.id)
          
                      if (itenId != e.target.parentElement.id) {
                          document.getElementById(itenId).classList.remove('active')
                          localStorage.removeItem('itenId')
                          localStorage.setItem('itenId', e.target.parentElement.id)
                      }
          
                      if (window.innerWidth <= 480 && e.target.parentElement.classList.contains('active')) {
                          //console.log(e.target.parentElement.previousElementSibling);
                          if (!e.target.parentElement.previousElementSibling) {
                              console.log('object')
                              blockList.style.transform = 'translateX(114px)'
                          } else if (!e.target.parentElement.nextElementSibling) {
                              console.log('object')
                              blockList.style.transform = 'translateX(0)'
                          } else {
                              blockList.style.transform = 'translateX(57px)'
                          }
                          e.target.nextElementSibling.style.width = `${window.innerWidth - 57}px`;
                      } else {
                          blockList.style.transform = 'translateX(0)'
                
                      }
                  }
          
              })

              
            }


            