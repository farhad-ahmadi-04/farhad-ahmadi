import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";
import render from "../Assets/render.js";
import heroSection from "./hero.js";
import servicesSection from "./services.js";
// varients
const app = document.querySelector('.app')

// create element
const main = domGenerator({
    tag: 'main',
})

window.addEventListener('DOMContentLoaded', () => {
    render(main, heroSection())
    render(main, servicesSection)
    render(app, main)
})

export default main