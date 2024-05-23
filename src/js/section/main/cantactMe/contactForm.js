import domGenerator from "../../../../../node_modules/dom-generator/dist/domGenerator.js";

const contactForm = () => {
    return domGenerator({
        tag: 'form',
        attributes: { id: 'contact-form' },
        children: [{
            tag: 'div',
            attributes: { class: "inputs" }
        }, {
            tag: 'div',
            attributes: { class: "submit-div" }
        }]
    })
}
export default contactForm