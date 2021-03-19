

const GamburgerMenu = document.querySelector('.menu-open');
const FirstPart = document.querySelector('.first__part');
const TwoPart = document.querySelector('.two__part');
const ThreePart = document.querySelector('.three__part');
const OnlineMenu = document.querySelector('.topmenu');



GamburgerMenu.addEventListener('click', function(){
	OnlineMenu.classList.toggle('show-menu');
	GamburgerMenu.classList.toggle("menu-open__online")
	FirstPart.classList.toggle('first__online');
	TwoPart.classList.toggle('two__online');
	ThreePart.classList.toggle('three__online');
})

