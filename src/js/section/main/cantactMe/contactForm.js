import domGenerator from "dom-generator";

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
                properties: { value: "Send", type: "submit" },
            }]
        }]
    })
}
export default contactForm