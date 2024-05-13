import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create html element (must of the time use for create sections)
 * @param {string} ele - element name
 * @param {string} cla - class name
 * @returns html element
 */
const generateElement = (ele, cla) => {

    return domGenerator({
        tag: ele,
        attributes: { class: cla }
    })
}
export default generateElement