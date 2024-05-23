import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create footer stracture
 * @param {string} logo - logo of site(It's text) 
 * @returns html elemnt
 */
const footerGen = (logo) => {
    return domGenerator({
        tag: "footer",
        children: [{
            tag: "div",
            attributes: { class: 'footer-item logo-footer logo' },
            properties: { textContent: logo }
        }, {
            tag: "nav",
            attributes: { class: "footer-item nav-footer" },
        }, {
            tag: "div",
            attributes: { class: "footer-item media-footer" }
        }, {
            tag: "div",
            attributes: { class: "footer-item contact-footer" }
        }]

    })
}
export default footerGen