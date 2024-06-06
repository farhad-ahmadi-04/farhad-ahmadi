import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import fetchData from "../../Assets/fetchData.js";
import render from "../../Assets/render.js";
import services from "./serviceSec/services.js";
import generateElement from "../../Assets/generateEle.js";
import hero from "./hero/hero.js";
import aboutMe from "./aboutMe/aboutMe.js";
import portfolio from "./portfolio/portfolio.js";
import cantactMe from "./cantactMe/cantactMe.js";


/**
 * 1st step: create main element
 * 2nd step: get render from sections
 * 3rd step: fetch data from json file
 * 4th step: get render form main in direction
 * @param {Element} app direction for appending to
 */
export const loadMain = (app) => {
    // create element
    const main = domGenerator({
        tag: 'main',
    })

    sectionsRender(main)

    //featch data
    const obj = fetchData("src/js/Assets/data.json")
    // if featching is seccess, so call this function
    obj.then(data => {
        // call function for push data
        sectionData(data)
    })
        // if not,so call this
        .catch(err => { console.log(err) });

    render(app, main)
}

/**
 * get render from section when page loaded
*/
const sectionsRender = (item) => {
    // get renderf of hero section
    render(item, generateElement('section', 'landin-section hero-section', undefined, "hero-section"))
    render(item, generateElement('section', 'landin-section service--section col-primary-container', undefined, "service-section"))
    render(item, generateElement('section', 'landin-section about-me-sec col-primary-container', undefined, "aboutMe-section"))
    render(item, generateElement('section', 'landin-section portfolio-sec col-primary-container', undefined, "portfolio-section"))
    render(item, generateElement('section', 'landin-section cantact-me-sec col-primary-container', undefined, "cantactMe-section"))
}





/**
 * set component of sections => set data to component and then send it to sections.
 * @param {object} data - data fron json server
*/
const sectionData = (data) => {
    // hero components
    hero(data);

    // service components:
    services(data)

    // about components:
    aboutMe(data)

    // portfolio components:
    portfolio(data)

    // contact me components:
    cantactMe()
};