import render from "../../Assets/render.js"
import footerGen from "./footerGen.js"

/**
 * send components to footer
 * @param {HTMLElement} app - html element to get render 
 */
const footer = (app) => {
    render(app, footerGen("feri"))
}
export default footer