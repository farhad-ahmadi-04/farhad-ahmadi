import render from "../../Assets/render.js";
import textBtn from "../../components/buttons/textBtn.js";
import { liList } from "../../components/list.js";
import mobileNavGen from "../../components/nav/mobileNavGen.js";
import ul from "../../components/nav/ulList.js";

/**
 * create mobile navbar
 * 1st: get render for stracture
 * 2nd: select nav & get render from ul list
 * 3nd: select hire me div & get render from text btn
 * @param {Element} pos - element for appending to
 */
const mobileNavbar = (pos) => {
    // 1st:
    render(pos, mobileNavGen('feri'))

    // 2nd:
    const mobileNav = document.querySelector('.mobile-nav')
    render(mobileNav, ul(liList, 'mobile-list-items'))

    // 3rd:
    const hireMeBtn = document.querySelector('.hire-me')
    render(hireMeBtn, textBtn('Hire me', 'primary--text-btn'))

    const hambergerMenu = document.querySelector('.hamberger-menu')
    const closeMobileNav = document.querySelector('.close-mobile-nav')
    hambergerMenu.addEventListener('click', showNavbar)
    closeMobileNav.addEventListener('click', hideNavbar)
}

/*
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// -------Menu show 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ----Menu hidden 
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
*/


const showNavbar = () => {
    const mobileNavbarHidden = document.querySelector('.mobile-navbar-hidden')
    mobileNavbarHidden.className = 'mobile-navbar'
}
const hideNavbar = () => {
    const mobileNavbarHidden = document.querySelector('.mobile-navbar')
    mobileNavbarHidden.className = 'mobile-navbar-hidden'
}

export default mobileNavbar