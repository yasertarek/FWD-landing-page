# Landing Page Project

This is a solution to the Landing Page Project task on [FWD Course on Udacity](https://egfwd.com/)
## Table of Contents
- [Overview](#instructions)
- [What I Learned](#what-i-learned)

## Overview
A simple Landing page that include 4 sections, you can navigate between them by clicking on each section's link nav item
## What I Learned
### Make smooth scroll between sections
```JS
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
```
## Author

- Linked In - [Yasser Tarek](https://www.linkedin.com/in/yasser-tarek-75b781210/)
- Frontend Mentor - [@yasertarek]https://www.frontendmentor.io/profile/yasertarek)
- Twitter - [@yasertarek420](https://www.twitter.com/yasertarek420)