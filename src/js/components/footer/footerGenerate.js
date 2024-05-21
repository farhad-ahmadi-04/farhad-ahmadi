import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import nav from "../nav.js";

const footerGenerate = (logo) => {
    return domGenerator({
        tag: "footer",
        children: [{
            tag: "div",
            attributes: { class: 'footer-item logo-footer' },
            properties: { textContent: logo }
        }, {
            tag: "div",
            attributes: { class: "footer-item nav-footer" },
            children: [{
                tag: nav
            }]
        }, {
            tag: "div",
            attributes: { class: "footer-item media-footer" }
        }, {
            tag: "div",
            attributes: { class: "footer-item contact-footer" }
        }]

    })
}
export default footerGenerate