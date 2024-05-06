import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

const labelSection = (label, text) => {
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
export default labelSection