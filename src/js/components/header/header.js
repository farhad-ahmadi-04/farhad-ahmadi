import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import nav from "../nav.js";
import textBtn from "../buttons/textBtn.js";

// create header by dom-generator
const header = domGenerator({
    tag: "header",
    children: [{
        tag: "div",
        attributes: { class: "menu--item menu-logo" },
        children: [
            {
                tag: "h1",
                properties: { textContent: "Logo" },
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
        tag: nav,
        attributes: { class: "menu--item menu-nav" },
    }, {
        tag: "div",
        attributes: { class: "menu--item menu-btn" },
        children: [{
            tag: textBtn("Hire me", "primary--text-btn")
        }]
    }]
});

export default header