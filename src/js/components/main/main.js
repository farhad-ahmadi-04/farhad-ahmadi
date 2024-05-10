import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import fetchData from "../../Assets/fetchData.js";
import render from "../../Assets/render.js";
import serviceCard from "../serviceCard.js";
import servicesSection from "./services.js";
import aboutMESection from "./aboutMe.js";
import heroItem from "./heroItem.js";
import mainImage from "../mainImg.js";
import iconBtn from "../iconbtn.js";
import MyIntroduction from "./MyIntroduction.js";
import generateElement from "../../Assets/generateEle.js";
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
    render(main, generateElement('section', 'landin-section, hero-section'))
    render(main, servicesSection)
    render(main, aboutMESection)
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
        aboutMeSecItem: document.querySelector('.about-me-sec-item'),
    }

    // call function for push data
    sectionData(data, objPosition)
})
    // if not,so call this
    .catch(err => { console.log(err) });




/**
 * set component of sections => set data to component and then send it to sections.
 * @param {object} data - data fron json server
 * @param {object} position - object of html element 
*/
const sectionData = async (data, position) => {
    try {

        // hero: get render hero item---
        render(position.heroSection, heroItem(data));
        // ---set icon btn in hero item
        const heroMedia = document.querySelector('.hero-media')
        await data.socialMedia.forEach(async item => {
            await render(heroMedia, iconBtn(item.icon, item.alt, item.address));
        })
        // ---get render from main image in hero section.
        render(position.heroSection, mainImage(data.about, "max"));

        // service section:
        // ---getting render from card in service section.
        await data.serviceCard.forEach(async item => {
            await render(position.serviceItems, serviceCard(item.src, item.alt, item.title, item.description))
        });

        // about me:
        // ---getting render from main image
        render(position.aboutMeSecItem, mainImage(data.about, "min"));
        render(position.aboutMeSecItem, MyIntroduction(data.about.aboutMe));
    } catch (error) {
        console.error(error);
    }
};
export default main