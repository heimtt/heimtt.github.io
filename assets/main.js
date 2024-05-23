'use strict';

//navi slide
const naviBtns = document.querySelectorAll('.js-navi');
const naviConts = document.querySelectorAll('.js-cont');

naviBtns.forEach((naviBtn) => {
	naviBtn.addEventListener('click',(e) => {
		//targetId
		const targetId =e.currentTarget.getAttribute('href').replace('#', '');

		//btn
		naviBtns.forEach((naviBtn) => {
			if(naviBtn !== e.currentTarget) naviBtn.classList.remove('js-active');
		});
		e.currentTarget.classList.add('js-active');

		//cont
		naviConts.forEach((naviCont) => {
			const areaId = naviCont.getAttribute('Id');
			if(areaId !== targetId) {
				naviCont.classList.remove('js-active');
			} else {
				naviCont.classList.add('js-active');
			}
		});
	});
});

//swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false
	// },
	breakpoints: {
		// when window width is >= 
		768: {
			slidesPerView: 1,
			spaceBetween: 30
		}
	},

	// Pagination
	pagination: {
		el: '.swiper-pagination',
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});