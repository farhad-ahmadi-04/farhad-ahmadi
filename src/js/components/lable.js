import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * this component will use as a title of section
 * @param {string} label - title of template
 * @param {string} text - text of template
 * @returns html element
 */
const label = (label, text) => {
    return domGenerator({
        tag: 'div',
        attributes: { class: 'lable-item' },
        children: [{
            tag: 'h1',
            attributes: { class: 'head-lable' },
            properties: { textContent: label }
        }, {
            tag: 'p',
            attributes: { class: 'body-lable' },
            properties: { textContent: text }
        }]
    })
}
export default label
