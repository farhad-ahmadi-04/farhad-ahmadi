import domGenerator from "dom-generator";

const MyIntroduction = (text) => {
    return domGenerator({
        tag: "p",
        properties: { textContent: text },
        attributes: { class: "primary--text" }
    })
};
export default MyIntroduction