import domGenerator from "../../../../../node_modules/dom-generator/dist/domGenerator.js";
import textIconBtn from "../../textIconBtn.js";

/**
 * create card component with dom generator
 * @param {object} data - data for create card
 * @returns html element(card)
 */
const portfolioCard = (category, data, icon) => {
    return domGenerator({
        tag: 'div',
        attributes: { class: "portfolio-Card" },
        children: [{
            tag: 'div',
            attributes: { class: "portfolio-head" },
            children: [{
                tag: 'img',
                properties: { src: "#", alt: "farhad" }
            }]
        }, {
            tag: 'div',
            attributes: { class: "portfolio-body" },
            children: [{
                tag: 'div',
                attributes: { class: "portfolio-body-label" },
                children: [{
                    tag: 'a',
                    attributes: { class: "portfolio-name" },
                    properties: { textContent: data.name, href: data.repository },
                }, {
                    tag: 'span',
                    attributes: { class: "portfolio-category" },
                    properties: { textContent: category },
                }]
            }, {
                tag: 'p',
                attributes: { class: "portfolio-body-description" },
                properties: { textContent: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." },
            }, {
                tag: 'a',
                properties: { href: data.sourceCode },
                children: [{
                    tag: textIconBtn(icon.arrowRight, "Arrow-Right", "source code", "primary--textIcon-btn")
                }]
            }]
        }]
    })
}
export default portfolioCard