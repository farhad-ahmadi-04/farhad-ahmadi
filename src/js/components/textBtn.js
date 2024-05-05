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
        attrebute: { class: "text-btn" },
        children: [{
            tag: 'a',
            attrebute: { href: url },
            prperties: { textContent: text }
        }]
    })
}
export default textBtn