import render from "@/js/Assets/render.js";
import textBtn from "@/js/components/buttons/textBtn.js";
import { liList } from "@/js/components/list.js";
import mobileNavGen from "@/js/components/nav/mobileNavGen.js";
import ul from "@/js/components/nav/ulList.js";
import "@/js/section/header/mobileNavbar.scss";

/**
 * create mobile navbar
 * 1st: get render for stracture
 * 2nd: select nav & get render from ul list
 * 3nd: select hire me div & get render from text btn
 * 4th step: slect navbar + btn for show vav & btn for close nav
 * 5th step: condition for show navbar
 * 6th step: condition for hide navbar
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
    render(hireMeBtn, textBtn('Hire me', 'primary--text-btn hireMe--btn'))

    // 4th:
    const navMenu = document.querySelector('.mobile-navbar'),
        navToggle = document.querySelector('.hamberger-menu'),
        navClose = document.querySelector('.close-mobile-nav')

    // 5th:
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('navbar-show')
        })
    }
    // 6th:
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('navbar-show')
        })
    }
}

export default mobileNavbar