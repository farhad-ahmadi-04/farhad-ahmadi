import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import fetchData from "../../Assets/fetchData.js";
import render from "../../Assets/render.js";
import services from "./serviceSec/services.js";
import generateElement from "../../Assets/generateEle.js";
import hero from "./hero/hero.js";
import aboutMe from "./aboutMe/aboutMe.js";
import portfolio from "./portfolio/portfolio.js";
import cantactMe from "./cantactMe/cantactMe.js";


// create element
const main = domGenerator({
    tag: 'main',
})

/**
 * get render from section when page loaded
*/
window.addEventListener('DOMContentLoaded', () => {
    // get renderf of hero section
    render(main, generateElement('section', 'landin-section hero-section row-primary-container'))
    render(main, generateElement('section', 'landin-section service--section col-primary-container'))
    render(main, generateElement('section', 'landin-section about-me-sec col-primary-container'))
    render(main, generateElement('section', 'landin-section portfolio-sec col-primary-container'))
    render(main, generateElement('section', 'landin-section cantact-me-sec col-primary-container'))
})

//featch data
const obj = fetchData("src/js/Assets/data.json")
// if featching is seccess, so call this function
obj.then(data => {
    // find positions for push 
    const objPosition = {
        heroSection: document.querySelector('.hero-section'),
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
const sectionData = (data, position) => {
    try {
        // hero components
        hero(data, position);

        // service components:
        services(data)

        // about components:
        aboutMe(data)

        // portfolio components:
        portfolio(data)

        // contact me components:
        cantactMe()
    } catch (error) {
        console.error(error);
    }
};
export default main