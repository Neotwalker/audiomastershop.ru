"use strict";

document.addEventListener("DOMContentLoaded", () => {

	let ChooseCity = document.querySelectorAll('.choose--city');

	ChooseCity.forEach(function(city) {
		let ChooseCityButton = city.querySelector('.choose--city button');
		ChooseCityButton.addEventListener('click', function(){
			city.classList.toggle('active');
		});
	
		let input = city.querySelector('.choose--city__block .search');
		let list = city.querySelector('.choose--city__list');
		let cities = list.querySelectorAll('li');
	
		input.addEventListener('input', function() {
			const searchValue = input.value.toLowerCase();
			
			if (searchValue.length < 1) {
				cities.forEach(function(city) {
					city.style.display = 'block';
				});
				return;
			}
		
			cities.forEach(function(city) {
				const cityName = city.querySelector('a').textContent.toLowerCase();
		
				if (!cityName.startsWith(searchValue)) {
					city.style.display = 'none';
				} else {
					city.style.display = 'block';
				}
			});
		});
	
		window.addEventListener('click', e => {
			const target = e.target;
			if (!target.closest('.choose--city__block') && !target.closest('.choose--city button')) {
				city.classList.remove('active');
			}
		});
	});

	let modalbackCall = document.querySelector('.modal--backCall');
	let modalbackCallButton = document.querySelector('.back--call');
	if (modalbackCall) {
		modalbackCallButton.addEventListener('click', () => {
			modalbackCall.classList.add('active');
			document.querySelector('.page--wrapper').classList.add('hidden');
		});
		modalbackCall.addEventListener("click", (event) => {
			if (!event.target.closest('.modal--backCall.active .modal--wrapper') && !event.target.closest('.modal--close')) {
				modalbackCall.classList.remove('active');
				document.querySelector('.page--wrapper').classList.remove('hidden');
				event.stopPropagation();
			}
		});
	}

	const openModalBestdeals = document.querySelectorAll('.open--modal__bestdeals');
	openModalBestdeals.forEach((item) => {
		const link = item.querySelector('.main--bestdeals__block--item__image');
		link.addEventListener('click', function(event) {
			event.preventDefault();
			const href = this.getAttribute('href');
			const modalId = href.substring(1);
			const modal = document.getElementById(modalId);
			modal.classList.add('active');
			document.querySelector('.page--wrapper').classList.add('hidden');
			modal.addEventListener("click", closeModal);
		});
	});

	function closeModal(event) {
		if (!event.target.closest('.modal--bestdealsItem.active .modal--wrapper') && !event.target.closest('.modal--close')) {
			const modal = event.currentTarget;
			modal.removeEventListener("click", closeModal);
			modal.classList.remove('active');
			document.querySelector('.page--wrapper').classList.remove('hidden');
			event.stopPropagation();
		}
	}

	// модальное окно "купить в 1 клик"
	let buyInOneClick = document.querySelectorAll(".buyInOneClick");
	if (buyInOneClick){
		buyInOneClick.forEach( (item) => {
			let buyInOneClickModals = document.querySelector(".modal--buyInOneClick");
			const buyInOneClickModal = () => {
				buyInOneClickModals.classList.add('active');
				document.querySelector('.page--wrapper').classList.add('hidden');
			}
	
			item.addEventListener("click", function(e) {
				e.preventDefault();
				buyInOneClickModal();
			});

			buyInOneClickModals.addEventListener("click", (event) => {
				if (!event.target.closest('.modal--buyInOneClick.active .modal--wrapper') && !event.target.closest('.modal--close')) {
					buyInOneClickModals.classList.remove('active');
					document.querySelector('.page--wrapper').classList.remove('hidden');
					event.stopPropagation();
				}
			});
		});
	}

	// модальное окно "Рассчитать стоимость доставки в ваш город"
	let calculateDelivery = document.querySelectorAll(".calculateDelivery");
	if (calculateDelivery){
		calculateDelivery.forEach(function(item){
			let calculateDeliveryModals = document.querySelector(".modal--calculateDelivery");
			const calculateDeliveryModal = () => {
				calculateDeliveryModals.classList.add('active');
			}
	
			item.addEventListener("click", function(e) {
				e.preventDefault();
				calculateDeliveryModal();
				document.querySelector('.page--wrapper').classList.add('hidden');
			});

			calculateDeliveryModals.addEventListener("click", (event) => {
				if (!event.target.closest('.modal--calculateDelivery.active .modal--wrapper') && !event.target.closest('.modal--close')) {
					calculateDeliveryModals.classList.remove('active');
					document.querySelector('.page--wrapper').classList.remove('hidden');
					event.stopPropagation();
				}
			});
		});
	}

	let chooseOnMap = document.querySelectorAll('.chooseOnMap');

	if (chooseOnMap){
		chooseOnMap.forEach( (map) => {
	
			let modalMaps = document.querySelector(".modal--map");
			const modalMap = () => {
				modalMaps.classList.add('active');
			}
			map.addEventListener("click", function(e) {
				e.preventDefault();
				modalMap();
				document.querySelector('.page--wrapper').classList.add('hidden');
			});

			modalMaps.addEventListener("click", (event) => {
				if (!event.target.closest('.modal--map.active .modal--wrapper') && !event.target.closest('.modal--close')) {
					modalMaps.classList.remove('active');
					document.querySelector('.page--wrapper').classList.remove('hidden');
					event.stopPropagation();
				}
			});
	
		});
	}


	// закрытие модального окна
	let modalClose = document.querySelectorAll(".modal--close");
	modalClose.forEach(close => {
		close.addEventListener('click', () => {
			const modal = close.closest('.modal');
			// Проверяем, есть ли у модального окна класс active
			if (modal.classList.contains('active')) {
				// Скрываем модальное окно
				modal.classList.remove('active');
				document.querySelector('.page--wrapper').classList.remove('hidden');
			}
		});
	});

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
			item.classList.toggle('liked');
		});
	});

	let deleteLikedCart = document.querySelectorAll('.cart--selected__item--info__favorites');
	deleteLikedCart.forEach( (destroy) => {
		destroy.addEventListener('click', () =>{
			let canDeleteItem = destroy.parentNode.parentNode.parentNode;
			canDeleteItem.remove();
		});
	});

	let deleteItem = document.querySelectorAll('.delete--item');
	deleteItem.forEach( (destroy) => {
		destroy.addEventListener('click', () =>{
			let canDeleteItem = destroy.parentNode.parentNode.parentNode;
			canDeleteItem.remove();
		});
	});

	let addToCart = document.querySelectorAll('.addToCart');

	addToCart.forEach(function(add){
		add.addEventListener('click', function(){
			add.textContent = 'В корзине';
			add.classList.add('added')
		});
	});

	// const link = document.querySelector('a[href="#allCharacteristics"]');
	
	// if (link){
	// 	const targetElement = document.querySelector('#allCharacteristics');
	// 	link.addEventListener('click', function(event) {
	// 		let marginTop = targetElement.offsetTop;
	// 		event.preventDefault();
		
	// 		if (window.innerWidth > 992) {
	// 			window.scrollTo({ 
	// 				top: marginTop - 100,
	// 				behavior: 'smooth' 
	// 			});
	// 		} else {
	// 			window.scrollTo({
	// 				top: marginTop - 80,
	// 				behavior: 'smooth' // Плавная прокрутка
	// 			});
	// 		}
	// 	});
	// }

	let link = document.querySelector('a[href="#allCharacteristics"]');

	if(link) {
		const targetElement = document.querySelector('#allCharacteristics');
		link.addEventListener('click', function(e){
			e.preventDefault();
			targetElement.scrollIntoView({
				behavior: "smooth"
			});
		});
	}

	let servicesItems = document.querySelectorAll(".center--services__item");

	servicesItems.forEach(function(item) {
		item.addEventListener("mouseenter", function() {
			item.classList.add('active');
		});

		item.addEventListener("mouseleave", function() {
			item.classList.remove('active');
		});

		let centerServicesHeader = item.querySelector('.center--services__item--header');

		centerServicesHeader.addEventListener("click", function() {
			servicesItems.forEach(function(item) {
				item.classList.remove("clicked");
			});
			item.classList.add("clicked");
		});
	});

	const smoothHeight = (itemSelector, buttonSelector, contentSelector) => {
		const items = document.querySelectorAll(itemSelector);
	
		if (!items.length) return;
	
		items.forEach(el => {
			const button = el.querySelector(buttonSelector);
			const content = el.querySelector(contentSelector);
	
			if (el.dataset.open === 'true') { // проверяем значение data-атрибута open у элемента
				button.classList.add('active') // добавляем класс 'active' в элемент
				content.style.maxHeight = `${content.scrollHeight}px` // устанавливаем высоту блока с контентом
			}
	
			button.addEventListener('click', () => {
				if (el.dataset.open !== 'true') {
					el.dataset.open = 'true';
					button.classList.add('active');
					content.style.maxHeight = `${content.scrollHeight}px`;
				} else {
					el.dataset.open = 'false';
					button.classList.remove('active');
					content.style.maxHeight = '';
				}
			})
	
			const onResize = () => {
				if (el.dataset.open === 'true') {
					if (parseInt(content.style.maxHeight) !== content.scrollHeight) {
						content.style.maxHeight = `${content.scrollHeight}px`;
					}
				}
			}
	
			window.addEventListener('resize', onResize);
		})
	}
	smoothHeight('.delivery--receivingOrder__block--question', '.delivery--receivingOrder__block--question__button', '.delivery--receivingOrder__block--answer') // вызываем основную функцию smoothHeight и передаем в качестве параметров  необходимые селекторы

	let deliveryReceivingOrderDelivery = document.querySelector('.delivery--receivingOrder__delivery');
	let deliveryReceivingOrderPickup = document.querySelector('.delivery--receivingOrder__pickup');
	let deliveryReceivingOrderPickupPoint = document.querySelector('.delivery--receivingOrder__pickupPoint');
	let deliveryButtonDelivery = document.querySelector('.button--delivery');
	let deliveryButtonPickup = document.querySelector('.button--pickup');
	let deliverButtonPickupPoint = document.querySelector('.button--pickupPoint');
	let cartPaymentBlock = document.querySelector('.cart--payment__block--methodReceiving__item');

	// Функция для добавления или удаления атрибута "disabled" у элементов
	function toggleDisabledState(element, toggle) {
		const formElements = element.querySelectorAll('input, select, radio, checkbox, textarea, button');
		formElements.forEach((el) => {
			if (toggle) {
				el.setAttribute('disabled', 'disabled');
			} else {
				el.removeAttribute('disabled');
			}
		});
	}
	
	if(deliveryButtonDelivery){
		if (!deliveryReceivingOrderDelivery.classList.contains('active')) {
			toggleDisabledState(deliveryReceivingOrderDelivery, true);
		} else {
			toggleDisabledState(deliveryReceivingOrderDelivery, false);
		}
		deliveryButtonDelivery.addEventListener('click', function(e){
			e.preventDefault();
			this.classList.add('active');
			if(deliveryReceivingOrderDelivery){
				deliveryReceivingOrderDelivery.classList.add('active');
				toggleDisabledState(deliveryReceivingOrderDelivery, false);
			}
			
			if(deliveryButtonPickup){
				deliveryButtonPickup.classList.remove('active');
			}
			if(deliveryReceivingOrderPickup) {
				deliveryReceivingOrderPickup.classList.remove('active');
				toggleDisabledState(deliveryReceivingOrderPickup, true);
			}
			if(deliveryReceivingOrderPickupPoint){
				deliveryReceivingOrderPickupPoint.classList.remove('active');
				toggleDisabledState(deliveryReceivingOrderPickupPoint, true);
			}
			if(deliverButtonPickupPoint) {
				deliverButtonPickupPoint.classList.remove('active');
			}
		});
	}

	if(deliveryButtonPickup){
		if (!deliveryReceivingOrderPickup.classList.contains('active')) {
			toggleDisabledState(deliveryReceivingOrderPickup, true);
		} else {
			toggleDisabledState(deliveryReceivingOrderPickup, false);
		}
		deliveryButtonPickup.addEventListener('click', function(e){
			e.preventDefault();
			this.classList.add('active');
			if(deliveryReceivingOrderPickup) {
				deliveryReceivingOrderPickup.classList.add('active');
				toggleDisabledState(deliveryReceivingOrderPickup, false);
			}

			if (deliveryButtonDelivery) {
				deliveryButtonDelivery.classList.remove('active');
			}
			if(deliveryReceivingOrderPickupPoint) {
				deliveryReceivingOrderPickupPoint.classList.remove('active');
				toggleDisabledState(deliveryReceivingOrderPickupPoint, true);
			}
			if(deliveryReceivingOrderDelivery) {
				deliveryReceivingOrderDelivery.classList.remove('active');
				toggleDisabledState(deliveryReceivingOrderDelivery, true);
			}
			if(deliverButtonPickupPoint) {
				deliverButtonPickupPoint.classList.remove('active');
			}
		});
	}

	if(deliverButtonPickupPoint){
		if (!deliveryReceivingOrderPickupPoint.classList.contains('active')) {
			toggleDisabledState(deliveryReceivingOrderPickupPoint, true);
		} else {
			toggleDisabledState(deliveryReceivingOrderPickupPoint, false);
		}
		deliverButtonPickupPoint.addEventListener('click', function(e){
			e.preventDefault();
			this.classList.add('active');
			if(deliveryReceivingOrderPickupPoint){
				deliveryReceivingOrderPickupPoint.classList.add('active');
				toggleDisabledState(deliveryReceivingOrderPickupPoint, false);
			}

			if(deliveryButtonPickup){
				deliveryButtonPickup.classList.remove('active');
			}
			if (deliveryButtonDelivery) {
				deliveryButtonDelivery.classList.remove('active');
			}
			if (deliveryReceivingOrderPickup) {
				deliveryReceivingOrderPickup.classList.remove('active');
				toggleDisabledState(deliveryReceivingOrderPickup, true);
			}
			if (deliveryReceivingOrderDelivery){
				deliveryReceivingOrderDelivery.classList.remove('active');
				toggleDisabledState(deliveryReceivingOrderDelivery, true);
			}
		});
	}

	const methodReceivingItems = document.querySelectorAll('.cart--payment__block--methodReceiving__item--choosen');
	const spanElements = document.querySelectorAll('.cart--payment__block--methodReceiving__item--choosen span');
	const chooseButtons = document.querySelectorAll('.cart--payment__block--methodReceiving__item--choose');

	// chooseButtons.forEach((choose) => {
	// 	choose.addEventListener('click', function() {
	// 	 if (this.classList.contains('choosen')) {
	// 		this.classList.remove('choosen');
	// 		this.textContent = 'Выбрать';
	// 		this.parentNode.querySelector('span').style.display = 'none';
	// 	 } else {
	// 		methodReceivingItems.forEach(item => {
	// 		 item.classList.remove('active');
	// 		});
	// 		spanElements.forEach(span => {
	// 		 span.style.display = 'none';
	// 		});
	// 		chooseButtons.forEach(btn => {
	// 		 btn.classList.remove('choosen');
	// 		});
	// 		this.classList.add('choosen');
	// 		this.parentNode.classList.add('active');
	// 		this.parentNode.querySelector('span').style.display = 'block';
	// 		this.textContent = 'Изменить';
	// 	 }
	// 	});
	// });

	chooseButtons.forEach((choose) => {
		choose.addEventListener('click', function() {
			const formInputs = this.parentNode.parentNode.querySelectorAll('.cart--payment__block--form__input select, .cart--payment__block--form__input input');
			let isFormValid = true;
			formInputs.forEach(input => {
				if (input.hasAttribute('required') && !input.value) {
					isFormValid = false;
				}
			});
		
			if (!isFormValid) {
				this.parentNode.querySelector('span').textContent = 'Заполните все поля';
				this.parentNode.querySelector('span').style.display = 'block';
			} else {
				if (this.textContent === 'Изменить') {
					this.parentNode.querySelector('span').textContent = '';
					this.textContent = 'Выбрать';
					// Удаляем атрибут readonly и очищаем значения select и input
					const activeFormInputs = document.querySelectorAll('.cart--payment__block--methodReceiving__item.active .cart--payment__block--form__input select, .cart--payment__block--methodReceiving__item.active .cart--payment__block--form__input input');
					activeFormInputs.forEach(input => {
						input.removeAttribute('readonly');
						if (input.tagName === 'SELECT' || input.type === 'text') {
							input.value = '';
						}
					});
				} else {
					this.parentNode.querySelector('span').textContent = 'Выбрано';
					this.textContent = 'Изменить';
					// Добавляем атрибут readonly ко всем элементам формы внутри блока ".cart--payment__block--methodReceiving__item.active"
					const activeFormInputs = document.querySelectorAll('.cart--payment__block--methodReceiving__item.active .cart--payment__block--form__input select, .cart--payment__block--methodReceiving__item.active .cart--payment__block--form__input input');
					activeFormInputs.forEach(input => {
						input.setAttribute('readonly', true);
					});
				}
		
				methodReceivingItems.forEach(item => {
					item.classList.remove('active');
				});
				spanElements.forEach(span => {
					span.style.display = 'none';
				});
				chooseButtons.forEach(btn => {
					btn.classList.remove('choosen');
				});
		
				this.classList.add('choosen');
				this.parentNode.classList.add('active');
				this.parentNode.querySelector('span').style.display = 'block';
			}
		});
	});

	const paymentButtons = document.querySelectorAll('.payment--header__buttons .button');
	const paymentBlocks = document.querySelectorAll('.payment--blocks__item');

	paymentButtons.forEach(button => {
		button.addEventListener('click', function(e){
			e.preventDefault();

			const href = this.getAttribute('href');

			paymentButtons.forEach(btn => btn.classList.remove('active'));
			paymentBlocks.forEach(block => block.classList.remove('active'));

			this.classList.add('active');
			const targetBlock = document.querySelector(href);
			targetBlock.classList.add('active');
		});
	});

	let deliveryReceivingOrderScroll = document.querySelector('.scrollToInstructions');

	if(deliveryReceivingOrderScroll) {
		let instructions = document.querySelector('.delivery--receivingOrder__block--instructions');
		deliveryReceivingOrderScroll.addEventListener('click', function(e){
			e.preventDefault();
			instructions.scrollIntoView({
				behavior: "smooth"
			});
		});
	}

	let guaranteeScroll = document.querySelectorAll('.scrollTo');

	guaranteeScroll.forEach(button => {
		let guarantee = document.querySelector('#scrolled');
		button.addEventListener('click', function(e){
			e.preventDefault();
			guarantee.scrollIntoView({
				behavior: "smooth"
			});
		});
	});

	if (document.getElementById("check-chooseAll")){
		document.getElementById("check-chooseAll").addEventListener("change", function() {
			var isChecked = this.checked;
			var chooseGeneralCheckboxes = document.querySelectorAll(".choose--general");
		
			for(var i = 0; i < chooseGeneralCheckboxes.length; i++) {
				chooseGeneralCheckboxes[i].checked = isChecked;
			}
		});
	}

	let deliveryOptions = document.querySelectorAll('.cart--selected__right--order__methodOfObtaining--block__option');
	// Перебираем кнопки и добавляем обработчик события клика
	deliveryOptions.forEach(function(button) {
		button.addEventListener('click', function() {
			// Удаляем класс "active" у всех кнопок
			deliveryOptions.forEach(function(button) {
				button.classList.remove('active');
			});
			
			// Добавляем класс "active" только кликнутой кнопке
			this.classList.add('active');
		});
	});

	const smoothHeightQuestion = (itemSelector, buttonSelector, contentSelector) => {
		const items = document.querySelectorAll(itemSelector);
	
		if (!items.length) return;
	
		items.forEach(el => {
			const button = el.querySelector(buttonSelector);
			const content = el.querySelector(contentSelector);
	
			if (el.dataset.open === 'true') { // проверяем значение data-атрибута open у элемента
				button.classList.add('active') // добавляем класс 'active' в элемент
				content.style.maxHeight = `${content.scrollHeight}px` // устанавливаем высоту блока с контентом
			}
	
			button.addEventListener('click', () => {
				if (el.dataset.open !== 'true') {
					el.dataset.open = 'true';
					button.classList.add('active');
					content.style.maxHeight = `${content.scrollHeight}px`;
				} else {
					el.dataset.open = 'false';
					button.classList.remove('active');
					content.style.maxHeight = '';
				}
			})
	
			const onResize = () => {
				if (el.dataset.open === 'true') {
					if (parseInt(content.style.maxHeight) !== content.scrollHeight) {
						content.style.maxHeight = `${content.scrollHeight}px`;
					}
				}
			}
	
			window.addEventListener('resize', onResize);
		})
	}

	smoothHeightQuestion('.showMap__item', '.showMap__item--title', '.showMap__item--answer'); // вызываем основную функцию smoothHeight и передаем в качестве параметров  необходимые селекторы
	
	let paymentOrderCart = document.querySelector('#paymentOrder--cart');
	let paymentOrderInstallmentPlan = document.querySelector('#paymentOrder--installmentPlan');
	let paymentOrderCredit = document.querySelector('#paymentOrder--credit');
	let paymentOrderMethods = document.querySelectorAll('.cart--payment__block--paymentOrder__method');

	paymentOrderMethods.forEach(function(method) {
		method.addEventListener('click', function() {
			paymentOrderMethods.forEach(function(elem) {
				elem.classList.remove('active');
			});
			this.classList.add('active');
			if (this.classList.contains('paymentOrder--cart')) {
				paymentOrderCart.classList.add('active');
				paymentOrderInstallmentPlan.classList.remove('active');
				paymentOrderCredit.classList.remove('active');
			} else if (this.classList.contains('paymentOrder--installmentPlan')) {
				paymentOrderCart.classList.remove('active');
				paymentOrderInstallmentPlan.classList.add('active');
				paymentOrderCredit.classList.remove('active');
			} else if (this.classList.contains('paymentOrder--credit')) {
				paymentOrderCart.classList.remove('active');
				paymentOrderInstallmentPlan.classList.remove('active');
				paymentOrderCredit.classList.add('active');
			}
		});
	});

	let scrollSearch = document.querySelector('a[href="#scrollSearch"]');
	if(scrollSearch){
		let searchInput = document.querySelector('input[type="search"]');
		scrollSearch.addEventListener('click', function(e) {
			e.preventDefault();
			searchInput.classList.add('active');
			setTimeout(function() {
				searchInput.classList.remove('active');
			}, 3000);
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
		$input.attr('data-current--count', count);
	});
	
	$('.quantity .plus').click(function() {
		let $input = $(this).parent().find('.quantity--input');
		let count = parseInt($input.val()) + 1;
		count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
		$input.val(parseInt(count));
		$input.attr('data-current--count', parseInt(count));
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
	if( $('.modal--item__slider') ){
		$('.modal--item__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			adaptiveHeight: false,
			infinite: true,
			useTransform: true,
			speed: 400,
			cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		});
	 
		$('.modal--item__nav').on('init', function(event, slick) {
			$('.modal--item__nav .slick-slide.slick-current').addClass('is-active');
		})
		$(".modal--item__slides").each(function(index) {
			$('.modal--item__nav', $(this))
			.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				focusOnSelect: false,
				infinite: true,
				arrows: true,
				prevArrow: $(this).find('.modal--item__slides--prev'),
				nextArrow: $(this).find('.modal--item__slides--next'),
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
	}

	// categories-single.html
	if($('.categories--product__slider')){
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
	}

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

	function initCarousel() {
		$('.journal--single__services--slider-1').slick({
			dots: false,
			infinite: false,
			arrows: true,
			slidesToScroll: 3,
			slidesToShow: 3,
			prevArrow: $('.journal--single__services--prev-1'),
			nextArrow: $('.journal--single__services--next-1'),
		});
	 
		$('.journal--single__services--slider-2').slick({
			dots: false,
			infinite: false,
			arrows: true,
			slidesToScroll: 3,
			slidesToShow: 3,
			prevArrow: $('.journal--single__services--prev-2'),
			nextArrow: $('.journal--single__services--next-2'),
		});
	}
	
	function destroyCarousel() {
		$('.journal--single__services--slider-1, .journal--single__services--slider-2').slick('unslick');
	}
	
	function handleWindowResize() {
		if (window.innerWidth > 710) { // Проверяем условие, когда нужно инициализировать карусель
			initCarousel();
		} else { // Проверяем условие, когда нужно уничтожить карусель
			destroyCarousel();
		}
	}
	
	$(window).on('resize', handleWindowResize); // Добавляем обработчик события resize на объект window
	
	// Вызываем функцию handleWindowResize для проверки ширины окна сразу после загрузки страницы
	handleWindowResize();

	if ($('.center--works__slider')) {
		$('.center--works__slider').on('beforeChange afterChange', function(event, slick, currentSlide, nextSlide){
			var $slider = $(this);
			
			// Удалить стили с предыдущих активных слайдов
			$slider.find('.slick-slide').removeClass('slick-active-left slick-center slick-active-right');
			
			// Получить текущий активный слайд
			var $currentSlide = $slider.find('.slick-active');
			
			// Добавить стиль к слайду слева
			$currentSlide.prev().addClass('slick-active-left');
			
			// Добавить стиль к слайду справа
			$currentSlide.next().addClass('slick-active-right');
		});
	
		$('.center--works__slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			prevArrow: $('.center--works__prev'),
			nextArrow: $('.center--works__next'),
			swipe: false,
			responsive: [
				{
					breakpoint: 561,
					settings: {
						arrows: false,
						swipe: true,
						slidesToShow: 3
					}
				},
			]
		});
	
		// Вызов события после инициализации слайдера
		$('.center--works__slider').trigger('afterChange');
	}

});