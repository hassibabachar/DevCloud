const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

let testSlide = document.querySelectorAll('.testItem');
let dots = document.querySelectorAll('.dot');

var counter = 0;
function switchTest(currentTest){
	currentTest.classList.add('active');
	var testId = currentTest.getAttribute('attr');
	if(testId > counter){
		testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
		counter = testId;
		testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
	}
	else if(testId == counter){return;}
	else{
		testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
		counter = testId;
		testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
	}
	indicators();
}
function indicators(){
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(' active', '');
	}
	dots[counter].className += ' active';
}