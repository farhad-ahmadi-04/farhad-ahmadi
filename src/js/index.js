// main js file
import header from "./components/header/header.js";
import render from "./Assets/render.js";
import main from "./components/main/main.js";
import footer from "./components/footer/footer.js";

const app = document.querySelector('.app')

// get render from header
window.addEventListener('DOMContentLoaded', () => {
    render(app, header())
    render(app, main)
    render(app, footer(app))
})