import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";

// create header by dom-generator
const headerGen = () => {
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
            tag: "nav",
            attributes: { class: "menu--item menu-nav" },
        }, {
            tag: "div",
            attributes: { class: "menu--item menu-btn" },
        }]
    })
};

export default headerGen