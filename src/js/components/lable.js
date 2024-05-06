import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

const lableSection = (lable, text) => {
    return domGenerator({
        tag: 'div',
        attributes: { class: 'lable-item' },
        children: [{
            tag: 'h1',
            attributes: { class: 'head-lable' }
        }, {
            tag: 'p',
            attributes: { class: 'body-lable' }
        }]
    })
}
export default lableSection