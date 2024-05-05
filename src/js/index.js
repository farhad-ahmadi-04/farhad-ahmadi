// main js file
import header from "./components/header.js";
import render from "./Assets/render.js";
import main from "./components/main.js";

const app = document.querySelector('.app')

// get render from header
window.addEventListener('DOMContentLoaded', () => {
    render(app, header)
    render(app, main)
})