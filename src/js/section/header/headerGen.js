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
                    tag: "button",
                    attributes: { class: 'hamberger-menu' },
                    children: [{
                        tag: "span",
                        attributes: { class: "menu--icon top-icon" }
                    }, {
                        tag: "span",
                        attributes: { class: "menu--icon middle-icon" }
                    }, {
                        tag: "span",
                        attributes: { class: "menu--icon bttom-icon" }
                    }]
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