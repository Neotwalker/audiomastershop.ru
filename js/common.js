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

	// модальное окно "обратный звонок"
	let modal = document.querySelectorAll(".modal");
	
	modal.forEach(function(item){
		
		let CallbackButton = document.querySelectorAll(".back--call");
		let CallbackModal = document.querySelector(".modal--backCall");
		
		// модальное окно "обратный звонок"
		const openCallbackModal = () => {
			CallbackModal.classList.toggle('active');
		}
		
		CallbackButton.forEach(function(button){
			button.addEventListener("click", function(e) {
				openCallbackModal();
				document.querySelector('body').classList.add('hidden');
			});
		})

		let modalClose = item.querySelector(".modal--close");
		modalClose.addEventListener("click", function(e){
			item.classList.remove("active");
			document.querySelector('body').classList.remove('hidden');
			e.stopPropagation();
		});
		document.addEventListener('click', function(event) {
			let target = event.target;
			if (!target.closest('.modal--wrapper') && !target.closest('.back--call')) {
				item.classList.remove('active');
				document.querySelector('body').classList.remove('hidden');
			}
		});

		// модальные окна товаров
		let CategoryImageModal = document.querySelectorAll('.main--bestdeals__block--item__image');
		let modalBestdealsItems = item.querySelectorAll('.modal--bestdealsItem');
		CategoryImageModal.forEach(function(link) {
			// Получаем id модального окна, на которое ссылается ссылка
			let modalId = link.getAttribute('href').substring(1);
			
			if (modalId){
				// Назначаем обработчик события на клик по ссылке
				link.addEventListener('click', function(e) {
					e.preventDefault();
					
					// Получаем модальное окно с соответствующим id
					let modal = document.getElementById(modalId);
					
					// Добавляем класс active к модальному окну
					modal.classList.add('active');
					document.querySelector('body').classList.add('hidden');
	
					e.stopPropagation();
				});
			}
	
		});
		modalBestdealsItems.forEach(function(modal) {
			let modalBestdealsItemClose = modal.querySelector('.modal--bestdealsItem .modal--close');
			modalBestdealsItemClose.addEventListener("click", function(e){
	
				modal.classList.remove("active");
				document.querySelector('body').classList.remove('hidden');
			});
		});

	});

	// модальное окно "купить в 1 клик"
	let buyInOneClick = document.querySelectorAll(".buyInOneClick");
	buyInOneClick.forEach(function(item){
		if (buyInOneClick){
			let buyInOneClickModals = document.querySelector(".modal--buyInOneClick");
			const buyInOneClickModal = () => {
				buyInOneClickModals.classList.toggle('active');
			}
	
			item.addEventListener("click", function(e) {
				buyInOneClickModal();
				document.querySelector('body').classList.add('hidden');
			});
	
			let modalClose = buyInOneClickModals.querySelector(".modal--close");
			modalClose.addEventListener("click", function(e){
				buyInOneClickModals.classList.remove("active");
				document.querySelector('body').classList.remove('hidden');
				e.stopPropagation();
			});
	
			document.addEventListener('click', function(event) {
				let target = event.target;
				if (!target.closest('.modal--wrapper') && !target.closest('.buyInOneClick')) {
					buyInOneClickModals.classList.remove('active');
					document.querySelector('body').classList.remove('hidden');
				}
			});
		}
	});

	// модальное окно "Рассчитать стоимость доставки в ваш город"
	let calculateDelivery = document.querySelectorAll(".calculateDelivery");
	calculateDelivery.forEach(function(item){
		if (calculateDelivery){
			let calculateDeliveryModals = document.querySelector(".modal--calculateDelivery");
			const calculateDeliveryModal = () => {
				calculateDeliveryModals.classList.toggle('active');
			}
	
			item.addEventListener("click", function(e) {
				calculateDeliveryModal();
				document.querySelector('body').classList.add('hidden');
			});
	
			let modalClose = calculateDeliveryModals.querySelector(".modal--close");
			modalClose.addEventListener("click", function(e){
				calculateDeliveryModals.classList.remove("active");
				document.querySelector('body').classList.remove('hidden');
				e.stopPropagation();
			});
	
			document.addEventListener('click', function(event) {
				let target = event.target;
				if (!target.closest('.modal--wrapper') && !target.closest('.calculateDelivery')) {
					calculateDeliveryModals.classList.remove('active');
					document.querySelector('body').classList.remove('hidden');
				}
			});
		}
	})

	// каталог
	let menuCatalogOpen = document.querySelector('.header--middle__catalog');
	let menuCatalogButton = document.querySelector('.header--middle__catalog--icon');
	let menuCatalog = document.querySelector('.menu--catalog');
	// Получаем все элементы li с классом catalog--left__item
	let items = document.querySelectorAll('.catalog--left__item');
	let catalogHide = document.querySelector('.catalog--wrapper__hide');

	if (items) {
		let firstRightMenu = items[0].querySelector('.catalog--right__wrapper');
		let firstLeftMenu = items[0];
		menuCatalogOpen.addEventListener('click', function(e){
			menuCatalog.classList.toggle('active');
			menuCatalogButton.classList.toggle('open');
			if(innerWidth > 992){
				if (firstLeftMenu) {
					firstLeftMenu.classList.add('opened')
				}
				if (firstRightMenu) {
					firstRightMenu.classList.add('active');
				}
			}
		});

		catalogHide.addEventListener('click', function(){
			menuCatalog.classList.remove('active');
			menuCatalogButton.classList.remove('open');

			if (firstLeftMenu) {
				firstLeftMenu.classList.remove('opened')
			}
			if (firstRightMenu) {
				firstRightMenu.classList.remove('active');
			}
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
					}, 400);
					firstLeftMenu.classList.remove('opened');
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

	// добавление "quantity" в "button--addCart"
	let buttonAddCart = document.querySelectorAll('.button--addCart');

	buttonAddCart.forEach(function(item) {
		item.addEventListener('click', function(){
			let svgAddCart = item.querySelector('.button--addCart svg');
			let quantity = item.querySelector('.button--addCart .quantity')
			svgAddCart.classList.add('hide');
			item.classList.add('active');
		});
	});

	// добавление "active" в "main--bestdeals__block--item__like"
	let buttonLineCart = document.querySelectorAll('.main--bestdeals__block--item__like');

	buttonLineCart.forEach(function(item) {
		item.addEventListener('click', function() {
			let svgLikeCart = item.querySelector('.main--bestdeals__block--item__like svg');
			svgLikeCart.classList.toggle('liked');
		});
	});

	let addToCart = document.querySelectorAll('.addToCart');

	addToCart.forEach(function(add){
		add.addEventListener('click', function(){
			add.textContent = 'В корзине';
			add.classList.add('added')
		});
	});
	
	// поиск города
	const input = document.querySelector('.search');
	const list = document.querySelector('.choose--city__list');
	const cities = list.querySelectorAll('li');

	input.addEventListener('input', function() {
		const searchValue = input.value.toLowerCase();
		
		// Показываем все города, если поисковая строка пустая
		if (searchValue.length < 1) {
			cities.forEach(function(city) {
				city.style.display = 'block';
			});
			return;
		}

		cities.forEach(function(city) {
			const cityName = city.querySelector('a').textContent.toLowerCase();

			// Скрываем города, которые не начинаются с введенной поисковой строки
			if (!cityName.startsWith(searchValue)) {
				city.style.display = 'none';
			} else {
				city.style.display = 'block';
			}
		});
	});

	const link = document.querySelector('a[href="#allCharacteristics"]');
	
	if (link){
		const targetElement = document.querySelector('#allCharacteristics');
		link.addEventListener('click', function(event) {
			let marginTop = targetElement.offsetTop;
			event.preventDefault();
		
			if (window.innerWidth > 992) {
				window.scrollTo({ 
					top: marginTop - 100,
					behavior: 'smooth' 
				});
			} else {
				window.scrollTo({
					top: marginTop - 80,
					behavior: 'smooth' // Плавная прокрутка
				});
			}
		});
	}

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

	$("#price--min").val($(".main--catalog__filter--options__range").slider("values", 0));
	$("#price--max").val($(".main--catalog__filter--options__range").slider("values", 1));
	$(".options--prices input").change(function() {
		var input_left = $("#price--min").val().replace(/[^0-9]/g, ''),
		opt_left = $(".main--catalog__filter--options__range").slider("option", "min"),
		where_right = $(".main--catalog__filter--options__range").slider("values", 1),
		input_right = $("#price--max").val().replace(/[^0-9]/g, ''),
		opt_right = $(".main--catalog__filter--options__range").slider("option", "max"),
		where_left = $(".main--catalog__filter--options__range").slider("values", 0);
		if (input_left > where_right) {
				input_left = where_right;
		}
		if (input_left < opt_left) {
				input_left = opt_left;
		}
		if (input_left == "") {
		input_left = 0;
		}
		if (input_right < where_left) {
				input_right = where_left;
		}
		if (input_right > opt_right) {
				input_right = opt_right;
		}
		if (input_right == "") {
		input_right = 0;
		}
		$("#price--min").val(input_left);
		$("#price--max").val(input_right);
		if (input_left != where_left) {
				$(".main--catalog__filter--options__range").slider("values", 0, input_left);
		}
		if (input_right != where_right) {
				$(".main--catalog__filter--options__range").slider("values", 1, input_right);
		}
	});

	$('.main--catalog__filter--heading').click(function(){
		let $a = $(this).parent().find(".main--catalog__filter--options");
		$(".main--catalog__filter--options").not($a).slideUp();
		$(this).removeClass('active');
		$a.slideToggle();
	});

	// categories-separate.html
	$('.modal--item__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		adaptiveHeight: false,
		infinite: false,
		useTransform: true,
		speed: 400,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
	});
 
	$('.modal--item__nav').on('init', function(event, slick) {
		$('.modal--item__nav .slick-slide.slick-current').addClass('is-active');
	})
	.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: false,
		infinite: false,
		arrows: true,
		prevArrow: $('.modal--item__slides--prev'),
		nextArrow: $('.modal--item__slides--next'),
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
			breakpoint: 900,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}]
	});
 
	$('.modal--item__slider').on('afterChange', function(event, slick, currentSlide) {
		$('.modal--item__nav').slick('slickGoTo', currentSlide);
		let currrentNavSlideElem = '.modal--item__nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.modal--item__nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});
 
	$('.modal--item__nav').on('click', '.slick-slide', function(event) {
		event.preventDefault();
		let goToSingleSlide = $(this).data('slick-index');
		$('.modal--item__slider').slick('slickGoTo', goToSingleSlide);
	});

	$('.modal--item__slides--prev').on('click', function(){
		$('.modal--item__nav').slick('slickPrev');
		$('.modal--item__slider').slick('slickPrev');
	});
	
	$('.modal--item__slides--next').on('click', function(){
		$('.modal--item__nav').slick('slickNext');
		$('.modal--item__slider').slick('slickNext');
	});

	// categories-single.html
	$('.categories--product__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: false,
		adaptiveHeight: false,
		infinite: false,
		useTransform: true,
		speed: 400,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		responsive: [{
			breakpoint: 481,
				settings: {
					dots: true,
				}
		}]
	});
 
	$('.categories--product__nav').on('init', function(event, slick) {
		$('.categories--product__nav .slick-slide.slick-current').addClass('is-active');
	})
	.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: false,
		infinite: false,
		arrows: true,
		prevArrow: $('.categories--product__slides--prev'),
		nextArrow: $('.categories--product__slides--next'),
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
			breakpoint: 900,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}]
	});
 
	$('.categories--product__slider').on('afterChange', function(event, slick, currentSlide) {
		$('.categories--product__nav').slick('slickGoTo', currentSlide);
		let currrentNavSlideElem = '.categories--product__nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.categories--product__nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});
 
	$('.categories--product__nav').on('click', '.slick-slide', function(event) {
		event.preventDefault();
		let goToSingleSlide = $(this).data('slick-index');
		$('.categories--product__slider').slick('slickGoTo', goToSingleSlide);
	});

	$('.categories--product__slides--prev').on('click', function(){
		$('.categories--product__nav').slick('slickPrev');
		$('.categories--product__slider').slick('slickPrev');
	});
	
	$('.categories--product__slides--next').on('click', function(){
		$('.categories--product__nav').slick('slickNext');
		$('.categories--product__slider').slick('slickNext');
	});

	$('.categories--additional__slider').slick({
		dots: false,
		infinite: false,
		arrows: true,
		slidesToScroll: 1,
		slidesToShow: 1,
	});

	if (innerWidth > 768){
		$('.categories--watched__slider').slick({
			dots: false,
			infinite: false,
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			prevArrow: $('.categories--watched__slider--prev'),
			nextArrow: $('.categories--watched__slider--next'),
			responsive: [{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			}]
		});
	}

});