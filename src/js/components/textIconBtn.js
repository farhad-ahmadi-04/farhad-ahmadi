import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create textIcon btn by dom generator and set value dynamically
 * @param {string} url - address of btn
 * @param {string} image - image of btn that get from json server
 * @param {string} alt - alt of image
 * @param {string} text - text of btn
 * @returns bottun element (text icon btn)
 */
const textIconBtn = (url, image, alt, text) => {
    return domGenerator({
        tag: "a",
        attributes: { class: "text-icon-btn", href: url },
        children: [{
            tag: 'button',
            attributes: { class: "primary--textIcon-btn" },
            children: [{
                tag: "img",
                attributes: { class: "icon-btn-image" },
                properties: { src: image, alt: alt }
            }, {
                tag: "span",
                properties: { textContent: text }
            }]
        }]
    })
}
export default textIconBtn;