import domGenerator from "dom-generator";
// import fetchData from "@/js//Assets/fetchData.js";
import render from "@/js//Assets/render.js";
import services from "@/js/section/main/serviceSec/services.js";
import generateElement from "@/js/Assets/generateEle.js";
import hero from "@/js/section/main/hero/hero.js";
import aboutMe from "@/js/section/main/aboutMe/aboutMe.js";
import portfolio from "@/js/section/main/portfolio/portfolio.js";
import cantactMe from "@/js/section/main/cantactMe/cantactMe.js";


/**
 * 1st step: create main element
 * 2nd step: get render from sections
 * 3rd step: import data from json file
 * 4th step: get render form main in direction
 * @param {Element} app direction for appending to
 */
export const loadMain = async (app) => {
    // create element
    const main = domGenerator({
        tag: 'main',
    })

    sectionsRender(main)


    const test = await import("@/js/Assets/data.json")
    render(app, main)
    sectionData(test)
}

/**
 * get render from section when page loaded
*/
const sectionsRender = (item) => {
    // get renderf of hero section
    render(item, generateElement('section', 'landin-section hero-section', undefined, "hero-section"))
    render(item, generateElement('section', 'landin-section service--section', undefined, "service-section"))
    render(item, generateElement('section', 'landin-section about-me-sec', undefined, "aboutMe-section"))
    render(item, generateElement('section', 'landin-section portfolio-sec', undefined, "portfolio-section"))
    render(item, generateElement('section', 'landin-section cantact-me-sec', undefined, "cantactMe-section"))
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