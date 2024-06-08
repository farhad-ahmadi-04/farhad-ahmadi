import domGenerator from "dom-generator";

/**
 * create html element (must of the time use for create sections)
 * @param {string} ele - element name
 * @param {string} cla - class name
 * @param {string} text - text for element
 * @returns html element
 */
const generateElement = (ele, cla, text, idEle = undefined) => {

    return domGenerator({
        tag: ele,
        attributes: { class: cla, id: idEle },
        properties: { textContent: text }
    })
}
export default generateElement