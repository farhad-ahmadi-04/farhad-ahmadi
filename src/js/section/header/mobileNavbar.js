import render from "../../Assets/render.js";
import { liList } from "../../components/list.js";
import mobileNavGen from "../../components/nav/mobileNavGen.js";
import ul from "../../components/nav/ulList.js";

/**
 * create mobile navbar
 * 1st: get render for stracture
 * 2nd: select nav & get render from ul list
 * @param {Element} pos - element for appending to
 */
const mobileNavbar = (pos) => {
    // 1st:
    render(pos, mobileNavGen('feri'))

    // 2nd:
    const mobileNav = document.querySelector('.mobile-nav')
    render(mobileNav, ul(liList, 'mobile-nav-ul'))




}
export default mobileNavbar