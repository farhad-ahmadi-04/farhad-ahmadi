import domGenerator from "../../node_modules/dom-generator/dist/domGenerator.js";

// create header by dom-generator
const header = domGenerator({
    tag: "header",
    children: [
        {
            tag: "div",
            attributes: { class: "left-item" },
            properties: { textContent: "left-item--test..." },
        },
        {
            tag: "div",
            attributes: { class: "right-item" },
            properties: { textContent: "right-item--test..." },
        }
    ],
});

export default header