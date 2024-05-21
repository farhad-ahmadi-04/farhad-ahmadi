import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js"
import render from "../../Assets/render.js"
import footerGen from "./footerGen.js"

// create element
const footer = domGenerator({
    tag: 'footer',
})

window.addEventListener('DOMContentLoaded', () => {

    render(footer, footerGen("feri"))

})

export default footer