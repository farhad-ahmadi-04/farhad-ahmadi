import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create text button component to use everywhere
 * @param {string} text - value of textBtn
 * @param {string} url - url of link
 * @returns - html element (button)
 */
const textBtn = (text, url) => {
    return domGenerator({
        tag: "a",
        attributes: { class: "text-btn" },
        properties: { href: url },
        children: [{
            tag: 'button',
            attributes: { class: "primary--text-btn" },
            properties: { textContent: text }
        }]
    })
}
export default textBtn