// main js file
import header from "./components/header/header.js";
import render from "./Assets/render.js";
import main from "./components/main/main.js";
import footerGenerate from "./components/footer/footerGenerate.js";

const app = document.querySelector('.app')

// get render from header
window.addEventListener('DOMContentLoaded', () => {
    render(app, header)
    render(app, main)
    render(app, footerGenerate("feri"))
})