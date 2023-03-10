// VARIABLES
const BURGER_BTN = document.querySelector('.hamburger');

const NAV = document.querySelector('.nav');
const NAV_ITEMS_MOBILE = document.querySelectorAll('.nav-mobile .nav-link');
const FOOTER_YEAR_SPAN = document.querySelector('.footer__year');

// FUNCTIONS
const showHideNav = () => {
	NAV.classList.toggle('nav-mobile--active');

	if (BURGER_BTN.style.position !== 'fixed') {
		BURGER_BTN.style.position = 'fixed';
	} else {
		BURGER_BTN.style.position = 'absolute';
	}

	changeBurgerIcon();
};

const changeBurgerIcon = () => {
	BURGER_BTN.classList.toggle('is-active');
};

const updateFooterYear = () => {
	let currentYear = new Date().getFullYear();

	FOOTER_YEAR_SPAN.textContent = currentYear;
};

// EVENTS
BURGER_BTN.addEventListener('click', showHideNav);
NAV_ITEMS_MOBILE.forEach((item) => {
	item.addEventListener('click', showHideNav);
});
updateFooterYear();
