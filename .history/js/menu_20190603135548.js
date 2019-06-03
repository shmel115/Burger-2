/*window.onload = function(){
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
              
               
              
                let teamAcco = () => {
                  $(".team-accordion__link").on("click", e => {
                    e.preventDefault();
              
                    const $this = $(e.target);
                    const item = $this.closest(".team-accordion__item");
                    const container = $this.closest(".team-accordion");
                    const items = $(".team-accordion__item", container);
                    const content = item.find(".team-accordion__details");
                    const otherContent = $(".team-accordion__details", container);
              
                    if (!item.hasClass("is-active")) {
                      items.removeClass("is-active");
                      item.addClass("is-active");
                      otherContent.stop(true).slideUp();
                      content.stop(true).slideDown();
                    } else {
                      item.removeClass("is-active");
                      content.stop(true).slideUp();
                    }
                  });
                };
              
                teamAcco();
              
                
              
                let verticalAcco = () => {
                  let calculateWidth = () => {
                    let windowWidth = $(window).width();
                    let links = $(".menu-acco__trigger");
                    let linksWidth = links.width();
                    // console.log(links);
                    let reqWidth = windowWidth - linksWidth * links.length;
              
                    return reqWidth > 550 ? 550 : reqWidth;
                  };
              
                  let openItem = item => {
                    let container = $(".menu-acco");
                    let items = $(".menu-acco__item", container);
                    let content = item.find(".menu-acco__content");
                    let accoText = $(".menu-acco__text", container);
                    let activeItem = items.filter(".active");
                    let activeContent = activeItem.find(".menu-acco__content");
                    let reqWidth = calculateWidth();
              
                    items.removeClass("active");
                    item.addClass("active");
              
                    accoText.hide();
                    activeContent.animate({ width: "0px" });
              
                    content.animate(
                      {
                        width: reqWidth + "px"
                      },
                      () => {
                        accoText.fadeIn();
                      }
                    );
                  };
              
                  const closeItem = item => {
                    item.removeClass("active");
              
                    item
                      .closest(".menu-acco")
                      .find(".menu-acco__text")
                      .stop(true, true)
                      .fadeOut(() => {
                        item.find(".menu-acco__content").animate({ width: "0px" });
                      });
                  };
              
                  $(".menu-acco__trigger").on("click", e => {
                    e.preventDefault();
                    // let _this = e.target;
                    // let $this = $(e.target);
                    // console.log(e);
                    // console.log(_this);
                    // console.log($this);
                    let $this = $(e.target);
                    let item = $this.closest(".menu-acco__item");
                    item.hasClass("active") ? closeItem(item) : openItem(item);
                  });
                 
                  $(document).on("click", e => {
                    const $this = $(e.target);
              
                    if (!$this.closest(".menu-acco").length) {
                      closeItem($(".menu-acco__item"));
                    }
                  });
                };
              
                verticalAcco();
              
                /*FancyBox*/
              
                let fancyboxModal = () => {
                  $(".review__btn").fancybox({
                    touch: true,
                    smallBtn: false
                  });
                  $(".modal-review__close").on("click", e => {
                    e.preventDefault();
                    $.fancybox.close();
                  });
                };
                fancyboxModal();
              
                
              
                let owlCarousel = () => {
                  const burgerCarousel = $(".slider__list").owlCarousel({
                    items: 1,
                    nav: true,
                    navContainer: $(".slider__controls"),
                    navText: ["", ""],
                    loop: true
                  });
              
                  $(".slider__btn_next").on("click", e => {
                    e.preventDefault();
                    burgerCarousel.trigger("next.owl.carousel");
                  });
              
                  $(".slider__btn_prev").on("click", e => {
                    e.preventDefault();
                    burgerCarousel.trigger("prev.owl.carousel");
                  });
                };
              
                owlCarousel();
              
                
              
                let ingredientsVisible = () => {
                  let ingredients = $(".ingredients");
                  $(".ingredients__close").on("click touchstart", e => {
                    e.preventDefault();
                    ingredients.removeClass("ingredients_active");
                  });
              
                  ingredients.on({
                    mouseenter() {
                      $(this).addClass("ingredients_active");
                    },
                    mouseleave() {
                      $(this).removeClass("ingredients_active");
                    }
                  });
                };
                ingredientsVisible();
              
                /*OnePageScroll*/
              
                var md = new MobileDetect(window.navigator.userAgent), 
                  isMobile = md.mobile(); 
              
                let OnePageScroll = function() {
                  const sections = $(".section");
                  const visible = $("#content");
                  let inscroll = false;
              
                  let performTransition = function(sectionEq) {
                    
                    // if (inscroll) return
                    if (!inscroll) {
                      inscroll = true;
              
                      let position = sectionEq * -100 + "%";
              
                      sections
                        .eq(sectionEq)
                        .addClass("is-active")
                        .siblings()
                        .removeClass("is-active");
              
                      visible.css({
                        transform: `translateY(${position})`,
                        "-webkit-transform": `translateY(${position})`
                      });
              
                      setTimeout(function() {
                        
                        inscroll = false;
              
                        $(".points__item")
                          .eq(sectionEq)
                          .addClass("active")
                          .siblings()
                          .removeClass("active");
                      }, 1000); 
                    }
                  };
              
                  let defineSections = function(sections) {
                    
                    let activeSection = sections.filter(".is-active");
                    return {
                      activeSection: activeSection,
                      nextSection: activeSection.next(),
                      prevSection: activeSection.prev()
                    };
                  };
              
                  let scrollToSection = function(direction) {
                    
                    let section = defineSections(sections);
              
                    if (direction === "up" && section.nextSection.length) {
                     
                      performTransition(section.nextSection.index());
                    }
              
                    if (direction === "down" && section.prevSection.length) {
          
                      performTransition(section.prevSection.index());
                    }
                  };
              
                  $(".wrapper").on({
                    
                    wheel: function(e) {
                      const deltaY = e.originalEvent.deltaY;
                      // console.log(deltaY)
                      const direction = deltaY > 0 ? "up" : "down";
              
                      scrollToSection(direction);
                    },
                    touchmove: e => e.preventDefault()
                  });
                  
                
                  if (isMobile) {
                    $(window).swipe({
                      swipe: (event, direction) => {
                        scrollToSection(direction);
                      }
                    });
                  }
              
                  $(document).on("keydown", e => {
                    
                    const section = defineSections(sections);
              
                    switch (e.keyCode) {
                      case 40: // up
                        // console.log(section.nextSection.length)
                        if (section.nextSection.length) {
                          performTransition(section.nextSection.index());
                        }
                        break;
              
                      case 38: // down
                        //console.log(section.prevSection.length)
                        if (section.prevSection.length) {
                          performTransition(section.prevSection.index());
                          break;
                        }
                    }
                  });
              
                  
                  $("[data-scroll-to]").on("click", e => {
                    e.preventDefault();
                    performTransition(parseInt($(e.target).data("scroll-to")));
                  });
                };
              
                
              
                function init() {
                  myMap = new ymaps.Map("map", {
                    center: [59.92606548, 30.32610869],
                    zoom: 11
                  });
              
                  myPlacemarks.forEach(function(obj) {
                    myPlacemark = new ymaps.Placemark(
                      [obj.latitude, obj.longitude],
                      {
                        hintContent: obj.hintContent,
                        hintContent: obj.balloonContent
                      },
                      {
                        iconLayout: "default#image",
                        iconImageHref: "assets/img/icon/map-marker.svg",
                        iconImageSize: [46, 57],
                        iconImageOffset: [-15, -50]
                      }
                    );
              
                    myMap.geoObjects.add(myPlacemark);
                  });
              
                  myMap.behaviors.disable("scrollZoom");
                }
              });
              