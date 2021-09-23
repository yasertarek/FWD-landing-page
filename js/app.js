/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionsArr   = Array.from(document.querySelectorAll('*[id^="section"]'));
const navbarMenu    = document.querySelector(".navbar__menu");
const ul            = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const fragment = document.createDocumentFragment();
function buildNav(e){
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${e.getAttribute("data-nav")}" class="menu__link">${e.getAttribute("data-nav")}</a>`;
    fragment.appendChild(li);
}
// Add class 'active' to section when near top of viewport
function activateSection(e){
    if(window.scrollY >= e.offsetTop - (e.offsetHeight * 0.25) && window.scrollY <= (e.offsetTop + e.offsetHeight - (e.offsetHeight * 0.75))){
        e.classList.add("active-sec");
    }else{
        e.classList.remove("active-sec");
    }
}

// Scroll to anchor ID using scrollTO event
function scrollOnClick(e){
    e.preventDefault();
    window.scrollTo(0, document.querySelector(`section[data-nav="${e.target.innerHTML}"]`).offsetTop);
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
sectionsArr.forEach(buildNav);
ul.appendChild(fragment);
// Scroll to section on link click
Array.from(document.querySelectorAll(".menu__link")).forEach(function(element){
    element.addEventListener("click", scrollOnClick);
});
// Set sections as active
window.addEventListener("scroll", ()=>{
    sectionsArr.forEach(activateSection);
});
