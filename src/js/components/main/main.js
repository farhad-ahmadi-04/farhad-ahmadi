import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import fetchData from "../../Assets/fetchData.js";
import render from "../../Assets/render.js";
import heroSection from "./hero.js";
import serviceCard from "../serviceCard.js";
import servicesSection from "./services.js";
import aboutMESection from "./aboutMe.js";
// varients
const app = document.querySelector('.app')

// create element
const main = domGenerator({
    tag: 'main',
})

/**
 * get render from section when page loaded
 */
window.addEventListener('DOMContentLoaded', () => {
    render(main, heroSection())
    render(main, servicesSection)
    render(main, aboutMESection())
    render(app, main)
})

//featch data
const obj = fetchData("src/js/Assets/data.json")
// if featching is seccess, so call this function
obj.then(data => {
    // find position for push card
    const serviceItems = document.querySelector('.service-items')
    // call function for push card from data
    loadServiceCard(data, serviceItems)
})
    // if not,so call this
    .catch(err => { console.log(err) });

/**
 * for send card to service section: send data and position to this function and then it will get render by helping from render modules
 * @param {Array} data - data of card
 * @param {Element} position - html element 
 */
const loadServiceCard = (data, position) => data.serviceCard.forEach(item =>
    render(position, serviceCard(item.src, item.alt, item.title, item.description))
);
export default main