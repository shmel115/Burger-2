//Слайдер меню-боковое
window.onload = function(){
const blockList = document.querySelector('.block-list')
          
              blockList.addEventListener('click', function (e) {
                e.preventDefault()
                  if (e.target.className === '.block-list__item') {
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
//Cлайдер-меню команды
  let teamAcco = () => {
        $(".team-accordeon__link").on("click", e => {
          e.preventDefault();
    
          const $this = $(e.target);
          const item = $this.closest(".team-accordeon__item");
          const container = $this.closest(".team-accordeon");
          const items = $(".team-accordeon__item", container);
          const content = item.find(".team-accordeon__about");
          const otherContent = $(".team-accordeon__about", container);
    
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
//карта
  ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.751574, 37.573856],
                zoom: 11
            }),
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            myPlacemark = new ymaps.Placemark([55.751574, 37.573856], {
                hintContent: 'Собственный значок метки с контентом1',
                balloonContent: 'Это наше описание',
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: './point.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-24, -24],
                iconContentLayout: MyIconContentLayout
            })
        myPlacemark2 = new ymaps.Placemark([55.760003, 37.553142], {
            hintContent: 'Собственный значок метки с контентом2',
            balloonContent: 'Это наше описание',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './point.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-24, -24],
            iconContentLayout: MyIconContentLayout
        })
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemark2)
      
    })
//форма
const myForm = document.querySelector('#myForm');
const button = document.querySelector('#button');
const name = document.querySelector('[name="name"]');  


button.addEventListener('click', event => {
    event.preventDefault();
    let formdata = new FormData()
    formdata.append('name', name)
    formdata.append('phone', 'name')
    formdata.append('comment', 'name')
    formdata.append('to', 'DelMare@mail.ru')
    fetch('https://webdev-api.loftschool.com/sendmail', {
        method: 'POST',
        body: formdata
    }).then (data => data.json())
    .then(json => {
      div.innerHTML = json.message
    });
    

/*if (validateForm(myForm)) {
    const data = {
        name:myForm.elements.name.value,
        phone:myForm.elements.phone.value,
        comment:myForm.elements.comment.value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(data));
    }*/
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }
    return valid;
}
function validateField(field) {
        field.nextElementSibling.textContent = field.validationMessage;
        return field.checkValidity();
    }
    

//Слайдер-меню бургеров горизонтальное
var slides = document.getElementsByClassName("slider__item"),
prev = document.querySelector("prev"),
next = document.querySelector("next");
var slideIndex = 1; 
showElem(slideIndex);
prev.addEventListener('click', (e) => {
  e.preventDefault()
  showElem(slideIndex -=1)
})
next.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('next')
  showElem(slideIndex +=1)
})

function showElem(n) {
  var i;
  if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";   
    
  }

  
  document.body.addEventListener('wheel', function(e){
    console.log(e.deltaY)
      const section = document.querySelector('.active')
      if(e.deltaY > 0) {
              
              console.log(section)
           let id = +section.getAttribute('id').slice(1) + 1
              console.log(id)
           let elemNext = document.getElementById('s' + id) || false
              
              if(elemNext){
                      section.classList.remove('active')
                      //section.setAttribute('style', '')
                      elemNext.classList.add('active')
                      elemNext.style.transform = `translate3d(0, ${-100 * id}%, 0)`
                          
                  }
      }
      if(e.deltaY < 0) {
              let id = +section.getAttribute('id').slice(1) - 1
              console.log(id)
           let elemNext = document.getElementById('s' + id) || false
              
              if(elemNext){
                      section.classList.remove('active')
                      section.setAttribute('style', '')
                      elemNext.classList.add('active')
                      elemNext.style.transform = `translate3d(0, ${-100 * id}%, 0)`
                          
                  }
      }
  })
//Слайдер вертикальный
const sections = $('.section');
const display = $('.wrapper-content');

let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent);

const isMobile = md.mobile();

const switchActiveClassInSideMenu = menuItemIndex => {
  $(".pagination__pages-item")
    .eq(menuItemIndex)
    .addClass("active")
    .siblings()
    .removeClass("active");
};

const performTransition = sectionEq => {
  if (inscroll) return;

  const sectionEqNum = parseInt(sectionEq);

  if (!!sectionEqNum === false)
    console.error("не верное значение для аргуемента sectionEq");

  inscroll = true;

  const position = sectionEqNum * -100 + "%";

  sections
    .eq(sectionEq)
    .addClass("active")
    .siblings()
    .removeClass("active");

  display.css({
    transform: `translateY(${position})`
  });

  setTimeout(() => {
    inscroll = false;
    switchActiveClassInSideMenu(sectionEq);
  }, 1000 + 300); // продолжительность транзишна + 300мс - время для завершения инерции тачустройств
};

const scrollToSection = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
};

$(".wrapper").on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollToSection("next");
  }
  if (deltaY < 0) {
    scrollToSection("prev");
  }
});

$('.wrapper').on('touchmove', e => {
  e.preventDefault();
});

$(document).on("keydown", e => {
  switch (e.keyCode) {
    case 38:
      scrollToSection("prev");
      break;
    case 40:
      scrollToSection("next");
      break;
  }
});

$("[data-scroll-to]").on("click", e => {
  e.preventDefault();
  const target = $(e.currentTarget).attr("data-scroll-to");

  performTransition(target);
});

if (isMobile) {
  $(window).swipe({
    swipe: function(event, direction) {
      const nextOrPrev = direction === "up" ? "next" : "prev";
      scrollToSection(nextOrPrev);
    }
  });
}

//видео
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    width: "660",
    height: "405",
    videoId: "zmg_jOwa9Fc",
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  const duration = player.getDuration();
  let interval;
  updateTimerDisplay();

  $(".player").removeClass("hidden");

  clearInterval(interval);

  interval = setInterval(() => {
    const completed = player.getCurrentTime();
    const percents = (completed / duration) * 100;

    changeButtonPosition(percents);

    updateTimerDisplay();
  }, 1000);
}

function onPlayerStateChange(event) {
  const playerButton = $(".player__start");
  switch (event.data) {
    case 1:
      $(".player__wrapper").addClass("active");
      playerButton.addClass("paused");
      break;
    case 2: 
      playerButton.removeClass("paused");
      break;
  }
}

$(".player__start").on("click", e => {
  const playerStatus = player.getPlayerState(); // 0 - ended, 1 - played, 2 - paused ...

  if (playerStatus !== 1) {
    player.playVideo();
  } else {
    player.pauseVideo();
  }
});


$(".player__playback").on("click", e => {
  e.preventDefault();
  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const clickedPercents = (newButtonPosition / bar.width()) * 100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercents;

  changeButtonPosition(clickedPercents);
  player.seekTo(newPlayerTime);
});

$(".player__splash").on("click", e => {
  player.playVideo();
});

function changeButtonPosition(percents) {
  $(".player__playback-button").css({
    left: `${percents}%`
  });
}

function updateTimerDisplay() {
  $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
  $(".player__duration-estimate").text(formatTime(player.getDuration()));
}

function formatTime(time) {
  const roundTime = Math.round(time);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;
  const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return minutes + ":" + formatedSeconds;
    }
  }


