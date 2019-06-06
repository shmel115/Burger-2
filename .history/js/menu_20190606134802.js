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

              const element = document.querySelector("#team-accordeon__item");

function createAccordeon(element, config) {
  let lastActive;

  element.classList.add("team-accordeon__item");
  element.addEventListener("click", function(e) {
    if (e.target.classList.contains("team-accordeon__link")) {
      if (lastActive) {
        lastActive.classList.remove("active");
      }

      lastActive = e.target.parentNode;
      lastActive.classList.add("active");
    }
  });

  if (!config) {
    return;
  }

  for (let i = 0; i < config.items.length; i++) {
    const item = config.items[i];
    const itemElement = document.createElement("div");
    const titleElement = document.createElement("div");
    const contentElement = document.createElement("div");

    titleElement.classList.add("team-accordeon__link");
    titleElement.textContent = item.title;
    contentElement.classList.add("content");
    contentElement.innerHTML = item.content;

    itemElement.appendChild(titleElement);
    itemElement.appendChild(contentElement);

    element.appendChild(itemElement);
  }
}

const myForm = document.querySelector('#myForm');
const button = document.querySelector('#button');  

button.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(myForm.elements.name.value);
    console.log(myForm.elements.phone.value);
    console.log(myForm.elements.comment.value);
    
    if (myForm.elements.callback.checked == true) {
        console.log('Не перезванивать');
    }
});
button.addEventListener('click', event => {
    event.preventDefault();
    let formdata = new FormData(button)
    fetch('https://webdev-api.loftschool.com/sendmail', {
        method: 'POST',
        body: formdata
    }).then (data => data.json())
    .then(json => {
      div.innerHTML = json.message
    })

if (validateForm(myForm)) {
    const data = {
        name:myForm.elements.name.value,
        phone:myForm.elements.phone.value,
        comment:myForm.elements.comment.value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(data));
    }
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

var slides = document.getElementsByClassName("item"),
prev = document.querySelector(".prev"),
next = document.querySelector(".next");
var slideIndex = 1; 
showElem(slideIndex);
prev.addEventListener('click', (e) => {
  e.preventDefault()
  showElem(slideIndex -=1)
})
next.addEventListener('click', (e) => {
  e.preventDefault()
  showElem(slideIndex += 1)
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
}
            