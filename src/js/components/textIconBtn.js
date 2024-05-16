import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create textIcon btn by dom generator and set value dynamically
 * @param {string} url - address of btn
 * @param {string} image - image of btn that get from json server
 * @param {string} alt - alt of image
 * @param {string} text - text of btn
 * @param {string} cla - style of btn
 * @returns bottun element (text icon btn)
 */
const textIconBtn = (image, alt, text, cla) => {
    return domGenerator({
        tag: 'button',
        attributes: { class: cla },
        children: [{
            tag: "img",
            attributes: { class: "icon-btn-image" },
            properties: { src: image, alt: alt }
        }, {
            tag: "span",
            properties: { textContent: text }
        }]
    })
}
export default textIconBtn;