import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create skill card component with dom generator 
 * @param {object} data - data of crad(image, alt, texts) from json
 * @returns html element
 */
const skillCard = (data) => {
    return domGenerator({
        tag: "div",
        attributes: { class: "skillCard" },
        children: [{
            tag: "div",
            attributes: { class: "progress" },
            children: [{
                tag: "div",
                attributes: { class: "progress-bar" },
                children: [{
                    tag: "img",
                    attributes: { class: "skill-icon" },
                    properties: { src: data.img, alt: data.alt },
                }]
            }]
        }, {
            tag: "div",
            attributes: { class: "skill" },
            children: [{
                tag: "span",
                attributes: { class: "progress-range" },
                properties: { textContent: `${data.avrage}%` }
            }, {
                tag: "span",
                attributes: { class: "skill-item primary--text" },
                properties: { textContent: data.tool }
            }]
        }]
    })
}
export default skillCard