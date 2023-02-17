// VARIABLES
const BURGER_BTN = document.querySelector('.hamburger');
// const BURGER_BARS_ARR = document.querySelectorAll('')

const NAV = document.querySelector('.nav');
const FOOTER_YEAR_SPAN = document.querySelector('.footer__year');

// FUNCTIONS
const showHideNav = () => {
	NAV.classList.toggle('nav-mobile--active');
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
updateFooterYear();
