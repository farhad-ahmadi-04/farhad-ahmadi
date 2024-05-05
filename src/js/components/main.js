import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";
import render from "../Assets/render.js";
import heroSection from "./hero.js";


const app = document.querySelector('.app')
const main = domGenerator({
    tag: 'main',
})

window.addEventListener('DOMContentLoaded', () => {
    render(main, heroSection())
    render(app, main)
})

export default main