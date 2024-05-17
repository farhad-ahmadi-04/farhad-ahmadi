import domGenerator from "../../../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create input component
 * @param {string} type - type of input 
 * @param {string} nameInput - name of input
 * @param {string} placeholder - placeholder of input
 * @param {string} cla - className of input
 * @returns html element
 */
const inputCom = (type, nameInput, placeholder, cla) => {
    return domGenerator({
        tag: "input",
        attributes: { class: cla },
        properties: { type: type, name: nameInput, placeholder: placeholder }
    })
}
export default inputCom