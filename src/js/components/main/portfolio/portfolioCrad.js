import domGenerator from "../../../../../node_modules/dom-generator/dist/domGenerator.js";

const portfolioCard = (data) => {
    return domGenerator({
        tag: 'div',
        attributes: { class: "portfolioCard" },
    })
}
export default portfolioCard