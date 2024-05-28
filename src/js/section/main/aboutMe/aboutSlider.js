import skillCard from "./skillCard.js";
import render from "../../../Assets/render.js";
import generateElement from "../../../Assets/generateEle.js";

/**
 * create skill cards:
 * 1st step: get render from element & select it.
 * 2nd step: create div of skills & select it.
 * 3rd step: create card by map method & get render from them.
 * 4th step: select cards.
 * 5th step: Clone cards to create continuous effect
 * @param {Element} item - element to appending to
 * @param {object} data - data of each cards
 */
export const sliderAbout = (item, data) => {
    // 1st:
    render(item, generateElement("div", "skills-sliedr row-primary-container"))
    const slillsSlider = document.querySelector('.skills-sliedr')

    // 2nd:
    render(slillsSlider, generateElement("div", "skills row-primary-container"))
    const skills = document.querySelector('.skills')

    // 3rd: 
    const cards = data.skill.map(item => render(skills, skillCard(item)))

    // 4th:
    const skillsCards = Array.from(skills.children);
    // 5th:
    skillsCards.forEach(card => {
        const clone = card.cloneNode(true);
        skills.appendChild(clone);
    });
}