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
            attributes: { class: "submit-div" },
            children: [{
                tag: 'input',
                attributes: { class: "outline-primary--text-btn" },
                properties: { textContent: "Send", type: "submit" },
            }]
        }]
    })
}
export default contactForm