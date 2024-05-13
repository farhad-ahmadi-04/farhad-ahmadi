import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";

const MyIntroduction = (text) => {
    return domGenerator({
        tag: "p",
        properties: { textContent: text },
        attributes: { class: "primary--text" }
    })
};
export default MyIntroduction