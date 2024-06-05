import skillCard from "./skillCard.js";
import render from "../../../Assets/render.js";
import generateElement from "../../../Assets/generateEle.js";
import { slider } from "../../../effects/slider/slider.js";

/**
 * create skill cards:
 * 1st step: get render from element & select it.
 * 2nd step: create div of skills & select it.
 * 3rd step: create card by map method & get render from them.
 * 4th step: select cards.
 * 5th step: call slider modules
 * @param {Element} item - element to appending to
 * @param {object} data - data of each cards
 */
export const sliderAbout = (item, data) => {
    // 1st:
    render(item, generateElement("div", "scroller"))
    const scroller = document.querySelector('.scroller')

    // 2nd:
    render(scroller, generateElement("div", "scroller-inner"))
    const scrollerInner = document.querySelector('.scroller-inner')

    // 3rd: 
    const cards = data.skill.map(item => render(scrollerInner, skillCard(item)))

    // 4th:
    const skillsCards = Array.from(scrollerInner.children);

    // 5th:
    slider(scroller)
}