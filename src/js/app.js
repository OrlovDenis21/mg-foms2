import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')

    const hamburger = document.querySelector('.hamburger')
    const close = document.querySelector('.close')
    const mobileMenu = document.querySelector('.mobile__menu')

    hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('visible')
    })

    close.addEventListener('click', () => {
    mobileMenu.classList.remove('visible')
    })

})
