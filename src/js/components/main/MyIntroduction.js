import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";

const MyIntroduction = (text) => {
    return domGenerator({
        tag: "div",
        attributes: { class: "introduction-item" },
        children: [{
            tag: "p",
            properties: { textContent: text },
            attributes: { class: "primary--text" }
        }, {
            tag: "div",
            attributes: { class: "introduction-btn" },
        }]
    })
};
export default MyIntroduction