/*
Task to do
1. Hide nav-container in mobile mode
2. Hide cover in mobile mode
3. Change color of menu to orange 
*/

const coverElement = document.querySelector('.cover');
const navContainerElement = document.querySelector('.nav-container');
const menuIconElement = document.querySelector('.burger');
const socialMediaNavElement = document.querySelector('.social-media-nav');
const closeIconElement = document.querySelector('.close');

const toggleNav = () => {
    coverElement.classList.toggle('hide');
    navContainerElement.classList.toggle('hide');
    closeIconElement.classList.toggle('hide');
}

const addListeners = () => {
    menuIconElement.addEventListener('click', toggleNav);
    coverElement.addEventListener('click', toggleNav);
    socialMediaNavElement.addEventListener('click', toggleNav);
    closeIconElement.addEventListener('click', toggleNav);
}

const init = () => {
    coverElement.classList.add('hide');
    navContainerElement.classList.add('hide');
    closeIconElement.classList.add('hide');
}
addListeners();
init();

