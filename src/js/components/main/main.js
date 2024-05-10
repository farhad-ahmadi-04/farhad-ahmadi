import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import fetchData from "../../Assets/fetchData.js";
import render from "../../Assets/render.js";
import heroSection from "./hero.js";
import serviceCard from "../serviceCard.js";
import servicesSection from "./services.js";
import aboutMESection from "./aboutMe.js";
import heroItem from "./heroItem.js";
import mainImage from "../mainImg.js";
import iconBtn from "../iconbtn.js";
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
    // get renderf of hero section
    render(main, heroSection)
    render(main, servicesSection)
    render(main, aboutMESection())
    render(app, main)
})

//featch data
const obj = fetchData("src/js/Assets/data.json")
// if featching is seccess, so call this function
obj.then(data => {
    // find positions for push 
    const objPosition = {
        heroSection: document.querySelector('.hero-section'),
        serviceItems: document.querySelector('.service-items'),
    }

    // call function for push data
    sectionData(data, objPosition)
})
    // if not,so call this
    .catch(err => { console.log(err) });




/**
 * for send card to service section: send data and position to this function and then it will get render by helping from render modules
 * @param {object} data - data of card
 * @param {object} position - object of html element 
*/
const sectionData = async (data, position) => {
    try {

        // hero:
        render(position.heroSection, heroItem(data));
        // select positoin
        const heroMedia = document.querySelector('.hero-media')
        await data.socialMedia.forEach(async item => {
            await render(heroMedia, iconBtn(item.icon, item.alt, item.address));
        })

        render(position.heroSection, mainImage(data.about, "max"));

        await data.serviceCard.forEach(async item => {
            await render(position.serviceItems, serviceCard(item.src, item.alt, item.title, item.description))
        });
    } catch (error) {
        console.error(error);
    }
};
export default main