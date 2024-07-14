import domGenerator from "dom-generator";
import "@/js/section/main/cantactMe/contactMeSec.scss";
/**
 * create input component
 * @param {string} type - type of input 
 * @param {string} nameInput - name of input
 * @param {string} placeholder - placeholder of input
 * @param {string} cla - className of input
 * @returns html element
 */
export const inputCom = (ele, type, nameInput, placeholder, cla) => {
    return domGenerator({
        tag: "div",
        attributes: { class: "input-item" },
        children: [{
            tag: ele,
            attributes: { class: cla },
            properties: { type: type, name: nameInput, placeholder: placeholder }
        }, {
            tag: "small",
            attributes: { class: "error-message" }
        }]
    })
}

/**
 * function is for create textarea but not just it we can use it for another things too.
 * @param {string} ele - target element to create
 * @param {string} placeholder - placeholder of input
 * @param {string} cla - className 
 * @returns html element
 */
export const textareaCom = (ele, placeholder, cla) => {
    return domGenerator({
        tag: "div",
        attributes: { class: "input-item" },
        children: [{
            tag: ele,
            attributes: { class: cla },
            properties: { placeholder: placeholder }
        }, {
            tag: "small",
            attributes: { class: "error-message" }
        }]
    })
}