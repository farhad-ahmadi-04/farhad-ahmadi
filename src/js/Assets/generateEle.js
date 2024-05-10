import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create html element (must of the time use for create sections)
 * @param {string} ele - element name
 * @param {string} cla - class name
 * @returns html element
 */
const generateElement = (ele, cla) => {
    const className = cla.split(",").join(' ');

    return domGenerator({
        tag: ele,
        attributes: { class: className }
    })
}
export default generateElement