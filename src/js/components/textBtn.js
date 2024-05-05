import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create text button component to use everywhere
 * @param {string} text - value of textBtn
 * @param {string} url - url of link
 * @returns - html element (button)
 */
const textBtn = (text, url) => {
    return domGenerator({
        tag: "button",
        attributes: { class: "text-btn" },
        children: [{
            tag: 'a',
            attributes: { class: "primary--text-btn" },
            properties: { textContent: text, href: url }
        }]
    })
}
export default textBtn