import domGenerator from "dom-generator";
import textIconBtn from "@/js/components/buttons/textIconBtn.js";
import "@/js/section/main/portfolio/portfolioCard.scss";
import "@/js/section/main/portfolio/portfolioSec.scss";

/**
 * create card component with dom generator
 * @param {object} data - data for create card
 * @returns html element(card)
 */
const portfolioCard = (category, data, icon) => {
    return domGenerator({
        tag: 'div',
        attributes: { class: `portfolio-Card portfolio-card-${category.id} portfolio-Card--active` },
        children: [{
            tag: 'img',
            attributes: { class: "portfolio-Card-image" },
            properties: { src: data.img, alt: data.alt },
        }, {
            tag: 'div',
            attributes: { class: "portfolio-body" },
            children: [{
                tag: 'div',
                attributes: { class: "portfolio-body-label" },
                children: [{
                    tag: 'a',
                    attributes: { class: "portfolio-name primary--text" },
                    properties: { textContent: data.name, href: data.repository },
                }, {
                    tag: 'span',
                    attributes: { class: "portfolio-category primary--text" },
                    properties: { textContent: category.name },
                }]
            }, {
                tag: 'p',
                attributes: { class: "portfolio-body-description primary--text" },
                properties: { textContent: data.description },
            }, {
                tag: 'a',
                properties: { href: data.sourceCode },
                children: [{
                    tag: textIconBtn(icon.arrowRight, "Arrow-Right", `${category.name === "js" ? 'source code' : 'View design'}`, "secondary--textIcon-btn")
                }]
            }]
        }]
    })
}
export default portfolioCard