import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create html element (must of the time use for create sections)
 * @param {string} ele - element name
 * @param {string} cla - class name
 * @param {string} text - text for element
 * @returns html element
 */
const generateElement = (ele, cla, text) => {

    return domGenerator({
        tag: ele,
        attributes: { class: cla },
        properties: { textContent: text }
    })
}
export default generateElement