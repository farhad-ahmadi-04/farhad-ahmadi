import { r as render, g as generateElement } from './index-1375b8e4.js';

const cursor = (app) => {
    render(app, generateElement("div", "cursor-dot"));
    render(app, generateElement("div", "cursor-outlione"));

    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutlione = document.querySelector(".cursor-outlione");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutlione.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
};

export { cursor };
