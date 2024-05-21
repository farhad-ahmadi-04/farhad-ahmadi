import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create text button component to use everywhere
 * @param {string} text - value of textBtn
 * @param {string} claBtn - style of btn
 * @returns - html element (button)
 */
const textBtn = (text, claBtn) => {
    return domGenerator({
        tag: 'button',
        attributes: { class: claBtn },
        properties: { textContent: text }
    })
}
export default textBtn