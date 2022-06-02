'use strict';

let header = document.querySelector('.header');       // объявление блоков страницы
let banner = document.querySelector('.banner');
let advantage = document.querySelector('.advantage');
let body = document.querySelector('body');
let aboutUs = document.querySelector('.videoAboutUs__feedback');
let headerTop = document.querySelector('.header__top');
let headerBot = document.querySelector('.header__bot');
let headerTopHeight = getComputedStyle(headerTop).height;


let advantageMarginArray = ['calc(732px + 120px)', 'calc(49.2vw + 120px)', 'calc(49.2vw + 9.23vw)', `calc(60vw + ${headerTopHeight})`]; // создаю массив и переменные для изменения отступров при скролле и ресайзе
let headerMarginArray = ['calc(730px)', '49.06vw', '60vw'];
let advantageMargin;
let headerMargin;

const media_more1488 = window.matchMedia('(min-width: 1489px)');
const media_1488 = window.matchMedia('(min-width: 1301px) and (max-width: 1488px)'); // результат проверки ширины экрана 1488px
const media_1300 = window.matchMedia('(min-width: 769px) and (max-width: 1300px)'); // результат проверки ширины экрана 1300px
const media_768 = window.matchMedia('(max-width: 768px)'); // результат проверки ширины экрана 768px
const media_600 = window.matchMedia('(max-width: 600px)');

/*
window.addEventListener('scroll', function scrolling () {    // при scroll'е постоянная проверка на размер прокрученной части стриницы

  if (window.pageYOffset <= banner.clientHeight ) {
    header.style.marginTop = '0px';
    header.style.position = 'fixed';
    advantage.style.marginTop = advantageMargin;
  } else {
    header.style.position = 'static';
    advantage.style.marginTop = '0px';
    header.style.marginTop = headerMargin;
  }

});



function checkScreen_1488(e) {                              // действия при ширине экрана ниже 1488
  if (e.matches) {
    advantageMargin = advantageMarginArray[1];
    headerMargin = headerMarginArray[1];
  }
}

media_1488.addListener(checkScreen_1488);                   // добавление прослушивания события
checkScreen_1488(media_1488);                               // инициализаци


function checkScreen_1300(e) {                              // действия при ширине экрана ниже 1300
  if (e.matches) {
    advantageMargin = advantageMarginArray[2];
  }
}

media_1300.addListener(checkScreen_1300);
checkScreen_1300(media_1300);

function checkScreen_more1488(e) {                          // действия при ширине экрана выше 1488
  if (e.matches) {
    advantageMargin = advantageMarginArray[0];
    headerMargin = headerMarginArray[0];
  }
}

media_more1488.addListener(checkScreen_more1488);
checkScreen_more1488(media_more1488);


window.addEventListener('resize', function chengeMargin() {
  header.style.marginTop = '0px';                             // задаю начальные значения для хедера и блока после банера
  header.style.position = 'fixed';
  advantage.style.marginTop = advantageMargin;

  if (window.pageYOffset > banner.clientHeight) {             // если при ресайзе уже был скрол, то хедер не "упадет" на блоки
    header.style.position = 'static';
    advantage.style.marginTop = '0px';
    header.style.marginTop = headerMargin;
  }

  if (media_more1488.matches) {                               // проверка медиа запросов при ресайзе
    advantageMargin = advantageMarginArray[0];
    headerMargin = headerMarginArray[0];
  } else if (media_1488.matches) {
    advantageMargin = advantageMarginArray[1];
    headerMargin = headerMarginArray[1];
  } else if (media_1300.matches) {
    advantageMargin = advantageMarginArray[2];
  }
})


*/

function checkWidth() {
  headerTopHeight = getComputedStyle(headerTop).height;
  header.style.marginTop = '0px';                             // задаю начальные значения для хедера и блока после банера
  header.style.position = 'fixed';
  headerTop.style.position = 'static';
  headerBot.style.position = 'static';
  advantage.style.marginTop = advantageMargin;
  //header.scrollIntoView(top);
  document.querySelector('.stock__detailing-paragraph').innerHTML = 'Детейлинг студия «Quality Detailing» оказывает комплекс услуг по уходу за автомобилем с 2010 года! За это время мы прошли многое, стали опытнее и подняли качество наших услуг<br> на высочайший уровень. Мы гордимся тем количеством клиентов, которые остались довольны нашей работой. <br><br> Всегда рады предложить любому нашему клиенту только высочайшее качество услуг!'

   if (window.pageYOffset <= banner.clientHeight) {
    header.style.marginTop = '0px';
    if (media_768.matches) {
      header.style.position = 'fixed';
    }
    headerTop.style.position = 'static';
    headerBot.style.position = 'static';
    advantage.style.marginTop = advantageMargin;
  } else {
    header.style.position = 'static';

    headerTop.style.width = '100%';
    headerTop.style.top = '0px';
    headerTop.style.zIndex = 100;
    if (media_768.matches) {
      headerTop.style.position = 'fixed';
      headerBot.style.position = 'fixed';
    }
    headerBot.style.top = '70px';
    advantage.style.marginTop = '0px';
    header.style.marginTop = headerMargin;
  }

  if (media_more1488.matches) {                               // проверка медиа запросов при ресайзе
    advantageMargin = advantageMarginArray[0];
    headerMargin = headerMarginArray[0];
  } else if (media_1488.matches) {
    advantageMargin = advantageMarginArray[1];
    headerMargin = headerMarginArray[1];
  } else if (media_1300.matches) {
    advantageMargin = advantageMarginArray[2];
    headerMargin = headerMarginArray[1];
  } else if (media_768.matches) {
    header.style.zIndex = 100;
    advantageMargin = advantageMarginArray[3];
    headerMargin = headerMarginArray[2];
    document.querySelector('.stock__detailing-paragraph').innerHTML = 'Детейлинг студия «Quality Detailing» оказывает комплекс услуг по уходу за автомобилем с 2010 года! За это время мы прошли многое, стали опытнее и подняли качество наших услуг на высочайший уровень. Мы гордимся тем количеством клиентов, которые остались довольны нашей работой. Всегда рады предложить любому нашему клиенту только высочайшее качество услуг!'
  }
}

window.addEventListener('scroll', checkWidth);
window.addEventListener('resize', checkWidth);
document.addEventListener('DOMContentLoaded', checkWidth);
window.addEventListener('load', checkWidth);


function blockAnimation({target, newTargetClass, currentThreshold = 0.5, trackedArea, borderVisionArea = 0}) {
  let targetList = document.querySelectorAll(target);
  const stockGridItemsAnimations = (entries, observer) => {   // функция всего лишь добавляет CSS-класс, который и осуществляет анимацию
    entries.forEach((entry) => {        // анимируем, если элемент попадает в отслеживаемую область
      if(entry.isIntersecting) {
        for (let item of targetList) {
          item.classList.add(newTargetClass);
        }
        return;
      }


       function checkVision() {    // если пользователь прокрутил страницу выше видимости элемента - удалить его ( элемент =] )
        if (!media_768.matches) {       // для всех разрещений кроме мобилки
          if (window.pageYOffset <= borderVisionArea) {
            for (let item of targetList) {
              item.classList.remove(newTargetClass);
            }
          }
        }
        console.log(window.pageYOffset);
      }
        window.addEventListener('scroll', checkVision);
        window.addEventListener('resize', checkVision);


    });
  }
  const options = {   // создаём обсервер с параметрами
    threshold: currentThreshold,
  };
  const observer = new IntersectionObserver(stockGridItemsAnimations, options);
  const area = document.querySelector(trackedArea);
  observer.observe(area);
}

let advantageAnimation = {
  target: '.advantage__item',
  newTargetClass: 'advantage__item_vision',
  trackedArea: '.crumbs-wrapper'
}

if (media_768.matches) {
  advantageAnimation.trackedArea = '.advantage';
}

let stockGridItemsAnimation = {
  target: '.stock__grid-item',
  newTargetClass: 'stock__grid-item_rotate',
  currentThreshold: 0.4,
  trackedArea: '.stock__grid',
  borderVisionArea: header.clientHeight
}

let stockServicesLiAnimation = {
  target: '.stock__services-li',
  newTargetClass: 'stock__services-li_vision',
  trackedArea: '.stock__services',
  borderVisionArea: document.querySelector('.stock__services').clientHeight
}

let storiesItemAnimation = {
  target: '.stories__item',
  newTargetClass: 'stories__item_vision',
  trackedArea: '.stories',
  borderVisionArea: document.querySelector('.skinBanner').clientHeight * 4
}

let commentSliderContentAnimation = {
  target: '.comment__slider-content',
  newTargetClass: 'comment__slider-content_vision',
  trackedArea: '.comment__content',
  currentThreshold: 0.05,
  borderVisionArea: document.querySelector('.comment__content').clientHeight * 6
}

blockAnimation(stockGridItemsAnimation);
blockAnimation(advantageAnimation);
blockAnimation(stockServicesLiAnimation);
blockAnimation(storiesItemAnimation);
blockAnimation(commentSliderContentAnimation);


// ================ PARALAX ================


function getPageX(obj) {
  let coords = obj.getBoundingClientRect();
  let pageX = Math.floor(coords.top + window.pageYOffset);
  return pageX;
}

let videoAboutUs = document.querySelector('.videoAboutUs__video');


function paralaxAnimate() {
  const transformAbout = window.getComputedStyle(aboutUs).getPropertyValue("transform").match(/(-?[0-9\.]+)/g);
  const animate = (entries, observer) => {   // функция всего лишь добавляет CSS-класс, который и осуществляет анимацию
    entries.forEach((entry) => {        // анимируем, если элемент попадает в отслеживаемую область
      if(entry.isIntersecting && (getPageX(videoAboutUs) - Math.floor(window.pageYOffset) - Math.floor(document.querySelector('.videoAboutUs').clientHeight * 0.6) >= 0)) {
        aboutUs.style.transform = `translateY(${Math.floor(getPageX(videoAboutUs) - window.pageYOffset - document.querySelector('.videoAboutUs').clientHeight * 0.6)}px)`;
      } else {
        aboutUs.style.transform = `translateY(0)`;
      }
    });
  }
  const options = {   // создаём обсервер с параметрами
    threshold: 0.1,
  };
  const observer = new IntersectionObserver(animate, options);
  const area = document.querySelector('.videoAboutUs');
  observer.observe(area);
}

if (!media_768.matches) {
  window.addEventListener('scroll', paralaxAnimate);
}

// ================ BURGER-MENU ================

let burgerMenu = document.querySelector('.header__burger');
if (media_768.matches) {
  // let burgerMenu = document.createElement('div');                    // создаю бургер
 // burgerMenu.className = 'header__burger';
 // document.querySelector('.header__top-info').append(burgerMenu);
 // burgerMenu.innerHTML = '<div class="header__burger-line"></div>';   // добавляю в него блок для линий



  burgerMenu.addEventListener('click', function() {
    document.querySelector('.header__burger-line').classList.toggle('header__burger-line_active');
    document.querySelector('.header__bot').classList.toggle('header__bot_active');
    document.querySelector('.header__address_mobile').classList.remove('header__address_mobile_animate');
    //document.querySelector('.main').classList.toggle('main_hiden');
    //document.querySelector('.header__top').classList.toggle('header__top_forward');

    /*
    setTimeout( () => document.querySelector('.header__top').classList.toggle('header__top_forward'), 300 )
    setTimeout( () => document.querySelector('.main').classList.toggle('main_hiden'), 150);
    setTimeout( () => document.querySelector('.footer').classList.toggle('footer_hidden'), 300);
    */
  })

  function unlinkBurgerMenu(obj) {
    for (let item of document.querySelectorAll(obj)) {
      item.onclick = function (event) {
        event.preventDefault();
      }
    }
  }

  unlinkBurgerMenu('.header__nav-link_hover a');
  unlinkBurgerMenu('.header__subUl-li_size_big > .link');


  document.querySelectorAll('.header__nav-link')[0].addEventListener('click', function() {
    document.querySelector('.header__carsBrand').classList.toggle('header__carsBrand_mobile');
  });
  document.querySelectorAll('.header__nav-link')[1].addEventListener('click', function() {
    document.querySelector('.header__subUl').classList.toggle('header__subUl_mobile');
  });

  for (let i = 0;  i < document.querySelectorAll('.header__subUl-li_size_big > .link').length; i++) {
    document.querySelectorAll('.header__subUl-li_size_big > .link')[i].addEventListener('click', function() {
      document.querySelectorAll('.header__subUl_size_small')[i].classList.toggle('header__subUl_mobile_small');
    })
  }
}


// ================ SERVICE ADRESS LIST IN HEADER ================


let headerAddressList = document.createElement('div');
headerAddressList.className = 'header__addressList';
document.querySelector('.header__paragraph_size_large').append(headerAddressList);
headerAddressList.innerHTML = '<a>Выбрать сервис</a>';

let headerTopInfo = document.querySelector('.header__top-info');
headerTopInfo.insertAdjacentHTML('beforeend', '<div class="header__address_mobile"><a href="#" class="header__paragraph header__paragraph_size_small"><p>Мичуринский</p><p>ул. Удальцова, 60</p><p>8(495)150-77-21</p></a><a href="#" class="header__paragraph header__paragraph_size_small"><p>Севастопольский</p><p>Севастопольский пр-т, 95Б с.1</p><p>8(495)150-70-36</p></a><a href="#" class="header__paragraph header__paragraph_size_small"><p>Дмитровка</p><p>ул. Лобненская, 17 стр 1</p><p>8(495)150-70-73</p></a></div>');

let headerAddressListLink = document.querySelector('.header__addressList>a');
headerAddressListLink.addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.header__address_mobile').classList.toggle('header__address_mobile_animate');
})


// ================ BANNER LINK ================

let bannerLink = document.createElement('a');
bannerLink.className = 'banner__link';
document.querySelector('.banner__signUp').append(bannerLink);
bannerLink.innerHTML = 'ЗАПИСАТЬСЯ';
bannerLink.setAttribute('href', '#videoAboutUs');


// ================ VIDEO ABOUT US ================
/*
let videoAU = document.querySelector('.videoAboutUs__video');
let videoAUcopy = videoAU.cloneNode(true);
videoAUcopy.classList.add('videoAboutUs__video_mobile');
document.querySelector('.videoAboutUs').append(videoAUcopy);
*/

// ================ POPUP MODAL ================
let headerCallback = document.querySelector('.header__callback-link');
let popupModalHeader = document.querySelector('.popup__modal_header');
let popupHeaderButton = document.querySelector('.popup__button_close');
let footerButton = document.querySelector('.footer__button');

let popupForm = document.querySelector('.popup__form_wrapper');
let popupSubmit = popupForm.querySelector('.popup__form_input-button');
let popupName = popupForm.querySelector('.popup__form_input-wrapper [type=text]');
let popupTel = popupForm.querySelector('.popup__form_input-wrapper [type=tel]');
let popupNameError = popupForm.querySelector('.popup__error_name');
let popupTelError = popupForm.querySelector('.popup__error_tel');
let placeholderTel = popupTel.placeholder;

function popupActive(event) {
  event.preventDefault();
  popupModalHeader.classList.add('popup__modal_visible');
  body.classList.add('body__modal_open');

  if (media_768.matches) {
    document.querySelector('.header__bot').classList.remove('header__bot_active');
    document.querySelector('.header__burger-line').classList.remove('header__burger-line_active')
  }
}

headerCallback.addEventListener('click', popupActive);
footerButton.addEventListener('click', popupActive);

popupHeaderButton.addEventListener('click', function() {
  popupModalHeader.classList.remove('popup__modal_visible');
  body.classList.remove('body__modal_open');
});



popupTel.addEventListener('mouseover', () => {
  popupTel.placeholder = '+7(___)___-__-__';
});

popupTel.addEventListener('mouseout', () => {
  popupTel.placeholder = placeholderTel;
});

function validationPopup() {
  if (popupName.value == "") {
    popupName.setCustomValidity(' ');
    popupNameError.innerHTML = "Поле обязательно для заполнения";
  } else {
    popupNameError.innerHTML = '';
  }

  if (popupTel.value == "") {
    popupTel.setCustomValidity(' ');
    popupTelError.innerHTML = "Поле обязательно для заполнения";
  } else if (popupTel.value.includes('_')) {
    popupTelError.innerHTML = "Введите корректный номер телефона";
  } else {
    popupTelError.innerHTML = "";
  }

}

popupSubmit.addEventListener('click', validationPopup);

function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    let range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select()
  }
}

function mask(e) {
  let matrix = this.placeholder,// .defaultValue
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function(a) {
    return val.charAt(i++) || "_"
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
  setCursorPosition(i, this)
}

function placeholderHover() {
  popupTel.placeholder = '+7(___)___-__-__';
}

popupTel.addEventListener('input', mask, false);
popupTel.addEventListener('focus', function() {
  if (popupTel.value == '') {
    popupTel.value = '+7(___)___-__-__';
  }

  popupTel.addEventListener('mouseout', placeholderHover)
});

popupTel.addEventListener('blur', () => {
  if (popupTel.value == '+7(___)___-__-__') {
    popupTel.value = "";
  }
  popupTel.removeEventListener('mouseout', placeholderHover);
  popupTel.placeholder = placeholderTel;
})
