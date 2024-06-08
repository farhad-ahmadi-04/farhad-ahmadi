import domGenerator from "../../../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create label for portfolio 
 * @param {string} label - text of label
 * @returns html element
 */
const portfolioLabel = (label) => {
    return domGenerator({
        tag: 'div',
        attributes: { class: 'lable-item portfolio-label' },
        children: [{
            tag: 'h1',
            attributes: { class: 'head-lable title--text' },
            properties: { textContent: label }
        }, {
            tag: 'div',
            attributes: { class: 'category' },
        }]
    })
}
export default portfolioLabel