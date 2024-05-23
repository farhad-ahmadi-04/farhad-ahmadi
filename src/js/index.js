// main js file
import header from "./section/header/header.js";
import render from "./Assets/render.js";
import main from "./section/main/main.js";
import footer from "./section/footer/footer.js";

const app = document.querySelector('.app')

// get render from header
window.addEventListener('DOMContentLoaded', () => {
    header(app)
    render(app, main)
    footer(app)
})