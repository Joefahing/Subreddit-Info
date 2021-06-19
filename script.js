/*
Task to do
1. Hide nav-container in mobile mode
2. Hide cover in mobile mode
3. Change color of menu to orange 
*/

const coverElement = document.querySelector('.cover');
const navContainerElement = document.querySelector('.nav-container');
const menuIconElement = document.querySelector('.menu');
const socialMediaNavElement = document.querySelector('.social-media-nav');


const hideNav = () => {
    coverElement.classList.add('hide');
    navContainerElement.classList.add('hide');
    menuIconElement.classList.remove('active');
}

const openNav = () => {
    coverElement.classList.remove('hide');
    navContainerElement.classList.remove('hide');
    menuIconElement.classList.add('active');
}

const addListeners = () => {
    menuIconElement.addEventListener('click', openNav);
    coverElement.addEventListener('click', hideNav);
    socialMediaNavElement.addEventListener('click', hideNav);
}

addListeners();
hideNav();

