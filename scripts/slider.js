'use strict';

function Slider(currentEl = null, prevEl = null, nextEl = null) { //функция-конструктор для создания объектов слайдера
	this.currentEl = currentEl;
	this.prevEl = prevEl;
	this.nextEl = nextEl;
}



let sliderArea = document.querySelector('.slider__wrapper').clientWidth;  //получаю ширину окна просмотра слайдера
let sliderList = Array.from(document.querySelectorAll('.slider__item'));  //преобразую NodeList слайдеров в массив
let amount = sliderList.length; //количество слайдеров

let prevButton;	// в зависимости от щирины экрана меняются кнопки управления слайдером
prevButton = media_600.matches ? document.querySelectorAll('.slider__control_prev')[1] : document.querySelectorAll('.slider__control_prev')[0];

let nextButton;
nextButton = media_600.matches ? document.querySelectorAll('.slider__control_next')[1] : document.querySelectorAll('.slider__control_next')[0];

let dotsArray = Array.from(document.querySelectorAll('.slider__dot'));	//массив индикации слайдеров

for (let item of dotsArray) {	//удаляю стандартное поведение ссылок в индикации слайдера
	item.addEventListener('click', function(event) {
		event.preventDefault();
	})
}

let dotMarker = document.querySelector('.slider__dot_marker'); //маркер слайдера
let commentDotMarker = document.querySelector('.comment__slider-dot_marker');
let commentDotsArray = Array.from(document.querySelectorAll('.comment__slider-dot'));
let dotMarkerPositions = ['calc(100% - 9px)',		// массив значений смещения маркера при анимации слайдов
													'calc(100% - 100%/7 - 9px)',
													'calc(100% - (100% / 7) * 2 - 9px)',
													'calc(100% - (100% / 7) * 3 - 10px)',
													'calc(100% - (100% / 7) * 4 - 10px)',
													'calc(100% - (100% / 7) * 5 - 11px)',
													'calc(100% - (100% / 7) * 6 - 11px)'];

if (media_1300.matches && media_768.matches) {
	dotMarkerPositions = ['calc(100% - 0.69vw)',
												'calc(100% - 100%/7 - 0.69vw)',
												'calc(100% - (100% / 7) * 2 - 0.75vw)',
												'calc(100% - (100% / 7) * 3 - 0.77vw)',
												'calc(100% - (100% / 7) * 4 - 0.88vw)',
												'calc(100% - (100% / 7) * 5 - 0.98vw)',
												'calc(100% - (100% / 7) * 6 - 1.08vw)'];

}



let sliderArray = []; //массив из объектов-слайдеров для создания анимации

function createSliderArray(list, amount, targetArray, count = 0) {
	for (count; count < amount; count++) {  //перебираю все слайдеры и на их основе создаю объекты для анимации
		let currentEl = list[count];

		let prevEl = list[count-1];
		if (count == 0) prevEl = list[amount - 1];  //для первого элемента предидущим слайдером будет последний элемент массива

		let nextEl = list[count+1];
		if (count == amount - 1) nextEl = list[0]; //для последнего элемента следующим слайдером будет первый элемент массива

		let item = new Slider(currentEl, prevEl, nextEl);

		targetArray.push(item);
	}
}

createSliderArray(sliderList, amount, sliderArray);

function sliderLine() { //выстраиваю слайдеры в порядке очереди друг за другом
	sliderArea = document.querySelector('.slider__wrapper').clientWidth
	for (let i = 0; i < amount; i++) {
		sliderArray[i].currentEl.style.transform = `translateX(${i * sliderArea}px)`
	}
}

document.addEventListener('DOMContentLoaded', sliderLine);
window.addEventListener('resize', sliderLine);

let count = 0;  //задаю начальное значение для счетчика. Данное значение будет общим для функции + и -

for (let i = 0; i < amount; i++) { //добавляю переключение слайдеров по клику на точках индикации

	dotsArray[i].addEventListener('click', function() {
    let items = document.querySelector('.slider__items');
		items.style.opacity = 0;

    for (let item of sliderList) {
			item.style.opacity = 0;
		}

		if (i >= count) {
			movingDotForward(i, dotMarker, dotsArray);
		} else {
			movingDotBackward(i);
		}



    setTimeout(() => {
      sliderArray[i].currentEl.style.transform = 'translateX(0)';
      sliderArray[i].currentEl.style.opacity = 1;
      sliderArray[i].nextEl.style.transform = 'translateX(100%)';
      sliderArray[i].prevEl.style.transform = 'translateX(-100%)';
    }, 300);

    setTimeout( () => {items.style.opacity = 1}, 800);
		count = i;
	})
}

function makeCounterNext() {  //функция увеличения счетчика
	return function() {
		count++;
		if (count > 6) count = 0;
		if (count < 0) count = 6;
		return count;
	};
}

function makeCounterPrev() {  //функция уменьшения счетчика
	return function() {
		count--;
		if (count > 6) count = 0;
		if (count < 0) count = 6;
		return count;
	};
}

function movingSlider(target) { // функция для смещения слайдера
  target.currentEl.style.transform = `translateX(${currentTranslateX}%)`;
	target.currentEl.style.opacity = 1;
	target.prevEl.style.transform = `translateX(${prevTranslateX}%)`;
	target.prevEl.style.opacity = 0;
	target.nextEl.style.transform = `translateX(${nextTranslateX}%)`;
	target.nextEl.style.opacity = 0;
}

function movingDotForward(index, target, array) {	//функция для смещения маркера вперед
	target.style.right = dotMarkerPositions[index];
	target.style.opacity = 1;

	if (index == 0) {
		target.style.transition = '0s';
		target.style.opacity = 0; //
		array[0].style.opacity = 1; //
		array[0].style.backgroundColor = 'rgb(0, 0, 0)'; //
		array[amount-1].style.opacity = 1;
		array[amount-1].style.backgroundColor = 'rgb(136, 136, 136)';
	} else {
		target.style.transition = '0.8s ease-in-out';
		array[index].style.transition = '0.4s ease-in-out'; //
		for (let j = 0; j <= index-1; j++) {
			array[j].style.opacity = 1;
			array[j].style.backgroundColor = 'rgb(136, 136, 136)'; //
		}

		setTimeout( () => {
			target.style.opacity = 0;
			target.style.transition = '0.2s ease-in-out'; //
			array[index].style.backgroundColor = 'rgb(0, 0, 0)'; //
		}, 500); //
	}
}

function movingDotBackward(index) {	//функция для смещения маркера назад
	dotMarker.style.right = dotMarkerPositions[index];
	dotMarker.style.opacity = 1;

	if (index == amount - 1) {
		dotMarker.style.transition = '0s';
		dotsArray[index].style.opacity = 1;
		dotsArray[index].style.backgroundColor = 'rgb(0, 0, 0)';
		dotsArray[0].style.opacity = 1;
		dotsArray[0].style.backgroundColor = 'rgb(136, 136, 136)';
	} else {
		dotMarker.style.transition = '0.8s ease-in-out';
		dotsArray[index].style.transition = '0.4s ease-in-out';

		dotsArray[index].style.opacity = 1;
		for (let j = index + 1; j < amount; j++) {
			dotsArray[j].style.opacity = 1;
			dotsArray[j].style.backgroundColor = 'rgb(136, 136, 136)';
		}

		setTimeout( () => {
			dotMarker.style.opacity = 0;
			dotMarker.style.transition = '0.2s ease-in-out';
			dotsArray[index].style.backgroundColor = 'rgb(0, 0, 0)';
		}, 500);
	}
}

function controlButtonAnimation() {	//функция для анимации исчезновения/повления кнопок перелистывания слайдеров
	let controlWrapper = document.querySelector('.slider__control-wrapper');
	controlWrapper.style.opacity = 0;

	setTimeout( () => {
		controlWrapper.style.display = 'none';
	}, 200);

	setTimeout( () => {
		controlWrapper.style.display = 'flex';
	}, 600);

	setTimeout( () => {
		controlWrapper.style.opacity = 1;
	}, 800);
}

let nextCounter = makeCounterNext();
let prevCounter = makeCounterPrev();

let currentTranslateX = 0;  //начальное значения смещения текущего слайдера
let nextTranslateX = 100; //начальное значения смещения следующего слайдер
let prevTranslateX = -100;  //начальное значения смещения предидущего слайдер

nextButton.addEventListener('click', function next() {  // функция для смещения слайдов вперед
	let i = nextCounter();
	let item = sliderArray[i];
  movingSlider(item);
	movingDotForward(i, dotMarker, dotsArray);
	controlButtonAnimation();

	if (media_600.matches) {
		nextButton.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
		nextButton.style.color = 'rgba(0, 0, 0, 0.35)';
		setTimeout( () => {
			nextButton.style.backgroundColor = 'transparent';
			nextButton.style.color = 'rgba(155, 154, 154, 0.75)';
			nextButton.style.transition = '0.3s ease';
		}, 300);
	}
	//let currentTranslateX = Number(item.currentEl.style.transform.replace(/[^\d.]/g, ''));
});

prevButton.addEventListener('click', function prev() {  //функция для смещения слайдов назад
	let i = prevCounter();
	let item = sliderArray[i];
  movingSlider(item);
	movingDotBackward(i);
	controlButtonAnimation();

	if (media_600.matches) {
		prevButton.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
		prevButton.style.color = 'rgba(0, 0, 0, 0.35)';
		setTimeout( () => {
			prevButton.style.backgroundColor = 'transparent';
			prevButton.style.color = 'rgba(155, 154, 154, 0.75)';
			prevButton.style.transition = '0.3s ease';
		}, 300);
	}
});


// ================= Comment Slider =================


let commentSliderArea = document.querySelector('.comment__slider-wrapper').clientWidth;
let commentSliderList = Array.from(document.querySelectorAll('.comment__slider-item'));
let commentAmount = commentSliderList.length;

let commentSliderArray = [];
createSliderArray(commentSliderList, commentAmount, commentSliderArray);

document.addEventListener('DOMContentLoaded', function() {  //выстраиваю слайдеры в порядке очереди друг за другом
	for (let i = 0; i < commentAmount; i++) {
		commentSliderArray[i].currentEl.style.transform = `translateX(${i * commentSliderArea}px)`
	}
});


function moveCommentSlide() {
	let count = 0;
	let nextCounter = makeCommentCounter();

	function makeCommentCounter() {
		return function() {
			count++;
			if (count > 6) count = 0;
			if (count < 0) count = 6;
			return count;
		};
	}

	setInterval( () => {
		let i = nextCounter();
		let item = commentSliderArray[i];
		movingSlider(item);
		movingDotForward(i, commentDotMarker, commentDotsArray);
	}, 4000);
}

moveCommentSlide();
