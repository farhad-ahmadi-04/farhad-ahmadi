import domGenerator from "dom-generator/dist/domGenerator.js";
import nav from "../nav.js";
import textBtn from "../buttons/textBtn.js";

// create header by dom-generator
const header = () => {
    return domGenerator({
        tag: "header",
        children: [{
            tag: "div",
            attributes: { class: "menu--item menu-logo" },
            children: [
                {
                    tag: "span",
                    attributes: { class: "logo" },
                    properties: { textContent: "feri" },
                }, {
                    tag: "span",
                    attributes: { class: "menu--icon" }
                }, {
                    tag: "span",
                    attributes: { class: "menu--icon" }
                }, {
                    tag: "span",
                    attributes: { class: "menu--icon" }
                }
            ]
        }, {
            tag: "nav"
        }, {
            tag: "div",
            attributes: { class: "menu--item menu-btn" },
        }]
    })
};

export default header