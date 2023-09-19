"use strict";

document.addEventListener("DOMContentLoaded", () => {

	let ChooseCity = document.querySelectorAll('.choose--city');

	ChooseCity.forEach(function(city) {
		let ChooseCityButton = city.querySelector('.choose--city button');
		ChooseCityButton.addEventListener('click', function(){
			city.classList.toggle('active');
		});
		window.addEventListener('click', e => {
			const target = e.target;
			if (!target.closest('.choose--city__block') && !target.closest('.choose--city button')) {
				city.classList.remove('active');
			}
		});
	});


	let CallbackButton = document.querySelector(".back--call");
	let modal = document.querySelector(".modal");
	let CallbackModal = document.querySelector(".modal--backCall");
	let modalClose = document.querySelector(".modal--close");
	let html = document.html || document.getElementsByTagName('html')[0];
	
	const openCallbackModal = () => {
		CallbackModal.classList.toggle('active');
	}
	
	CallbackButton.addEventListener("click", function() {
		openCallbackModal();
	});
	
	modalClose.addEventListener("click", function(){
		modal.classList.remove("active");
	});
	
	window.addEventListener('click', e => {
		const target = e.target;
		if (!target.closest('.modal--wrapper') && !target.closest('.back--call')) {
			modal.classList.remove('active');
		}
	});
	
	let menuCatalogOpen = document.querySelector('.header--middle__catalog');
	let menuCatalogButton = document.querySelector('.header--middle__catalog--icon');
	let menuCatalog = document.querySelector('.menu--catalog');
	
	menuCatalogOpen.addEventListener('click', function(){
		menuCatalog.classList.toggle('active');
		menuCatalogButton.classList.toggle('open');
		html.classList.toggle('hidden');
	});

	window.addEventListener('click', e => {
		const target = e.target;
		if (!target.closest('.menu--catalog') && !target.closest('.header--middle__catalog')) {
			menuCatalog.classList.remove('active');
			menuCatalogButton.classList.remove('open');
			html.classList.remove('hidden');
		}
	});

	// Получаем все элементы li с классом catalog--left__item
	let items = document.querySelectorAll('.catalog--left__item');
	let catalogHide = document.querySelector('.catalog--wrapper__hide');
	if (items) {
		catalogHide.addEventListener('click', function(){
			html.classList.remove('hidden');
			menuCatalog.classList.remove('active');
			menuCatalogButton.classList.remove('open');
		});
		// Для каждого элемента li
		items.forEach(function (item) {

			if(innerWidth > 992){
				let showRightWrapperTimeout; // Переменная для хранения таймаута
	
				// Проверка на наличие правого меню
				rightMenu = item.querySelector('.catalog--right__wrapper');
				if (rightMenu) {
					let catalogArrow = item.querySelector('.catalog--left__icon');
					catalogArrow.classList.add('true');
				}
	
				// Навешиваем обработчик события наведения мыши
				item.addEventListener('mouseenter', function () {
					// Находим внутри элемента li элемент catalog--right__wrapper
					let rightWrapper = item.querySelector('.catalog--right__wrapper');
	
					// Запускаем таймер для отображения rightWrapper с задержкой 300 мс
					showRightWrapperTimeout = setTimeout(function () {
						// Проверяем, если курсор находится внутри элемента catalog--right__wrapper, то не удаляем класс active
						if (!rightWrapper.matches(':hover')) {
							rightWrapper.classList.add('active');
						}
					}, 500);
				});
	
				// Навешиваем обработчик события ухода мыши
				item.addEventListener('mouseleave', function () {
					// Находим внутри элемента li элемент catalog--right__wrapper
					let rightWrapper = item.querySelector('.catalog--right__wrapper');
	
					// Очищаем таймер, если курсор покинул элемент прежде чем истекла задержка 300 мс
					clearTimeout(showRightWrapperTimeout);
	
					// Скрываем элемент catalog--right__wrapper, убирая у него класс active
					if (rightWrapper) {
						// Задержка перед удалением класса active
						setTimeout(function () {
							// Проверяем, если курсор находится внутри элемента catalog--right__wrapper, то не удаляем класс active
							if (!rightWrapper.matches(':hover')) {
								rightWrapper.classList.remove('active');
							}
						}, 400);
					}
				});
			} else {
				// Проверка на наличие правого меню
				rightMenu = item.querySelector('.catalog--right__wrapper');
				if (rightMenu) {
					let catalogArrow = item.querySelector('.catalog--left__icon');
					catalogArrow.classList.add('true');
				}
				item.addEventListener("click", function(){
					items.forEach(function(otherItem) {
						if (otherItem !== item) {
							otherItem.classList.remove("active");
						}
					});
					item.classList.add("active");
					catalogHide.classList.add("opened");

					let rightWrapper = item.querySelector('.catalog--right__wrapper');
					if (rightWrapper) {
						document.querySelectorAll('.catalog--right__wrapper').forEach(function(wrapper){
							wrapper.classList.remove("active");
						});
						rightWrapper.classList.add("active");
					}
				});
				
				let rightBackButton = item.querySelector('.catalog--right__back');
				if (rightBackButton) {
					rightBackButton.addEventListener('click', function(event) {
						event.stopPropagation();
						item.classList.remove('active');
						let rightWrapper = item.querySelector('.catalog--right__wrapper');
						if (rightWrapper) {
							rightWrapper.classList.remove('active');
							catalogHide.classList.remove('opened');
						}
					});
				}
			}
		});
	}

	let buttonAddCart = document.querySelectorAll('.button--addCart');

	buttonAddCart.forEach(function(item) {
		item.addEventListener('click', function(){
			let svgAddCart = item.querySelector('.button--addCart svg');
			let quantity = item.querySelector('.button--addCart .quantity')
			svgAddCart.classList.add('hide');
			item.classList.add('active');
		});
	});

	let buttonLineCart = document.querySelectorAll('.main--bestdeals__block--item__like');

	buttonLineCart.forEach(function(item) {
		item.addEventListener('click', function() {
			let svgLikeCart = item.querySelector('.main--bestdeals__block--item__like svg');
			svgLikeCart.classList.toggle('liked');
		});
	});
	

});

$(function() {

	$('.main--slider__wrapper').slick({
		infinite: true,
		prevArrow: $('.main--slider__prev'),
		nextArrow: $('.main--slider__next'),
		speed: 700,
		swipe: false,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 711,
				settings: {
					swipe: true,
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});
	
	$('.main--audioStudio__slider').slick({
		infinite: true,
		prevArrow: $('.main--audioStudio__prev'),
		nextArrow: $('.main--audioStudio__next'),
		speed: 700,
		autoplay: true,
		autoplaySpeed: 5000,
	});

	if(innerWidth <= 560){
		$('.footer--wrapper__block .menu').click(function(){
			let $a = $(this).find("ul");
			$(".footer--wrapper__block .menu ul").not($a).slideUp();
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.footer--wrapper__block .menu').not($a).removeClass('active');
			} else {
				$('.footer--wrapper__block .menu').removeClass('active');
				$(this).addClass('active');
			}
			$a.slideToggle();
		});

	}

	$('.quantity .minus').click(function() {
		let $input = $(this).parent().find('.quantity--input');
		let count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
	});

	$('.quantity .plus').click(function() {
		let $input = $(this).parent().find('.quantity--input');
		let count = parseInt($input.val()) + 1;
		count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
		$input.val(parseInt(count));
	});

	$('.quantity .quantity--input').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
		}
		if (this.value == "") {
				this.value = 1;
		}
		if (this.value > parseInt($(this).data('max-count'))) {
				this.value = parseInt($(this).data('max-count'));
		}
	});

});