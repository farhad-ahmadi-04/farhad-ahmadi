import generateElement from "../../../Assets/generateEle.js";
import render from "../../../Assets/render.js";
import textBtn from "../../textBtn.js";
import portfolioCard from "./portfolioCrad.js";
import portfolioLabel from "./portfolioLabel.js";
// import textBtn from "../../textBtn.js";

let showCardsStep = 0
let showCards = 2

/**
 * create portfoliosection and add component to the section:
 * 1st: get render from label 
 * 2nd: find categories from object and push it to array
 * 3rd: get render from categories by map method
 * 4th: create div for cards & select it
 * 5th: get data of cards
 * 6th: create empty array for cards = combined
 * 7th: loop on cards & destracture data of cards
 * 8th: push object by cards data to combined (empty array)
 * 9th: sort on combined and set it in 'shuffled' variable
 * 10th: call cardRender array function and pass datas
 * 11th: create div by 'more-card' classNamein portfolio-section for more btn & select it
 * 12th: get render from textBtn component in '.more-card' div & select btn(more)
 * 13th: set addEventListener on more btn(when user click on btn callBack cardRender array function )
 * @param {object} data data from json file
 */
const portfolio = (data) => {
    // 1st step: 
    const portfolioSec = document.querySelector(".portfolio-sec")
    render(portfolioSec, portfolioLabel("Portfolio"))
    const category = document.querySelector(".category")

    // 2nd step:
    const uniqueCategory = Object.keys(data.portfolio)

    // 3rd step:
    render(category, textBtn("All", "primary--text-btn"))
    uniqueCategory.map(item => render(category, textBtn(item, "secondary--text-btn")))

    // 4th step:
    render(portfolioSec, generateElement('div', "prtfolio-card-sec", undefined))
    const cardDiv = document.querySelector('.prtfolio-card-sec')

    // 5th step:
    const cardData = Object.entries(data.portfolio)
    // 6th step:
    const combined = [];

    // 7th step:
    for (const [category, project] of cardData) {
        project.map(item => {
            // 8th step:
            combined.push({ category: category, item });
        })
    }
    // 9th step:
    const shuffled = combined.sort(() => 0.5 - Math.random());

    // 10th step:
    cardRender(shuffled, cardDiv, data.icon, showCardsStep, showCards)

    // 11th step:
    render(portfolioSec, generateElement('div', "more-div", undefined))
    const moreDiv = document.querySelector('.more-div')

    // 12th step:
    render(moreDiv, textBtn("More", "more-card primary--text-btn"))
    const more = document.querySelector('.more-card')

    // 13th step:
    more.addEventListener('click', () => {
        cardRender(shuffled, cardDiv, data.icon, showCardsStep += 2, showCards += 2)
    })
}

/**
 * in project we can not show all of obj so , We should show only some of thet that by slice method and steps that we pass it, we do ot.
 * and then we get render, We pass position and element that create it by portfolioCard component.
 * @param {Array} cards - array of obj that project is in
 * @param {Element} pos - position for appending
 * @param {string} icon - src og image for textIconBtn
 * @param {number} showCardsStep - step of obj in array for find it to show it
 * @param {number} showCards - last step of obj in array for find it to show it
 */
const cardRender = (cards, pos, icon, showCardsStep, showCards) => {
    cards.slice(showCardsStep, showCards).map(({ category, item }) => {
        render(pos, portfolioCard(category, item, icon));
    });
}
export default portfolio