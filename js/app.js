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
// declare a fragment object to reduce reflow and repaint processes of adding links to nav
const fragment = document.createDocumentFragment();

function buildNav(e){
    const li = document.createElement("li");
    li.classList.add(e.getAttribute("id"));
    li.innerHTML = `<a href="#" class="menu__link ${e.getAttribute("id")}">${e.getAttribute("data-nav")}</a>`;
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
function scrollOnClick(e, speed = 15){
    /* 
        Speed stands for speed of scrolling => pixel/ms | #Equal 20 By Default#
        WSA => Window Scrolling Amount.
    */
    e.preventDefault();
    // Make a Timer for Making Smooth scroll
    const smoothScroll = window.setInterval(function(){
        // Store Window Scrolling Amount(WSA) for not changing value itself
        let yScroll = window.pageYOffset;
        // check whether WSA is Greater than The Clicked Section or Not
        if(yScroll < document.querySelector(`section[data-nav="${e.target.innerHTML}"]`).offsetTop){
            // Scroll The WSA and Increase the Variable of WSA
            window.scrollTo(0, yScroll += speed);
            // Cheeck if Scrolling Amount Reached The Clicked Section Position or not
            if(yScroll >= document.querySelector(`section[data-nav="${e.target.innerHTML}"]`).offsetTop){
                // Stop The Timer
                clearInterval(smoothScroll);
            }
            // check whether Window Scrolling Amount is Less than The Clicked Section or Not
        }else if(yScroll > document.querySelector(`section[data-nav="${e.target.innerHTML}"]`).offsetTop){
            // Scroll The WSA and Increase the Variable of WSA
            window.scrollTo(0, yScroll -= speed);
            // Cheeck if Scrolling Amount Reached The Clicked Section Position or not
            if(yScroll <= document.querySelector(`section[data-nav="${e.target.innerHTML}"]`).offsetTop){
                // Stop The Timer
                clearInterval(smoothScroll);
            }
        }
    }, 1);
}
function activateSectionLink(eSec, links){
    if(eSec.classList.contains("active-sec")){
        links.forEach(function(eLin){
            eLin.classList.remove("active-link");
            if(eLin.classList.contains(eSec.getAttribute("id"))){
                eLin.classList.add("active-link");
            }
        });
    }
}
function createScrollToTopBtn(scrollVal, maxScrollVal, btn){
    if(scrollVal > maxScrollVal){
        btn.classList.add("scroll-to-top--active");
    }else{
        btn.classList.remove("scroll-to-top--active");
    }
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
sectionsArr.forEach(buildNav);
// Add menu to nav
ul.appendChild(fragment);
// Scroll to section on link click
Array.from(document.querySelectorAll(".menu__link")).forEach(function(element){
    element.addEventListener("click", function(e){scrollOnClick(e,15)});
});
/*
Listen For Scroll and : 
    1- Set Sections as active.
    2- Set navigation link as active as an indcation to active Section.
*/
window.addEventListener("scroll", ()=>{
    // Set sections as active
    sectionsArr.forEach(activateSection);
    // Set navigation link as active as an indcation to active Section.
    sectionsArr.forEach(function(e){
        activateSectionLink(e, Array.from(document.querySelectorAll("a.menu__link")));
    });
    // Create Scroll to Top Button
    createScrollToTopBtn(window.pageYOffset, 600, document.querySelector(".scroll-to-top"));
});
// Scroll To Top Click Event
document.querySelector(".scroll-to-top").addEventListener("click", function(e){
    e.preventDefault();
    // Make Smooth Scroll
    const smoothScroll = setInterval(function(){
        if(window.pageYOffset > 0){
            let currentScroll = window.pageYOffset;
            window.scrollTo(0,currentScroll-= 15);
            if(currentScroll <= 0){
                clearInterval(smoothScroll);
            }
        }
    }, 1)
});