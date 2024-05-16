import domGenerator from "../../../../../node_modules/dom-generator/dist/domGenerator.js";
import textIconBtn from "../../textIconBtn.js";

/**
 * create card component with dom generator
 * @param {object} data - data for create card
 * @returns html element(card)
 */
const portfolioCard = (data) => {
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
                    tag: 'span',
                    attributes: { class: "portfolio-name" },
                    properties: { textContent: "Name Project" },
                }, {
                    tag: 'span',
                    attributes: { class: "portfolio-category" },
                    properties: { textContent: "category" },
                }]
            }, {
                tag: 'p',
                attributes: { class: "portfolio-body-description" },
                properties: { textContent: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." },
            }, {
                tag: textIconBtn(data.icon.arrowRight, "Arrow-Right", "source code", "primary--textIcon-btn"),
            }]
        }]
    })
}
export default portfolioCard