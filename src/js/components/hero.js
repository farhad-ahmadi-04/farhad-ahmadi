import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";
import iconBtn from "./iconbtn.js";


const heroSection = () => {
    return domGenerator({
        tag: "section",
        attributes: { class: "hero-section" },
        children: [{
            tag: "div",
            attributes: { class: "hero-item" },
            children: [
                {
                    tag: "p",
                    properties: { textContent: "Hi I am" }
                }, {
                    tag: "h3",
                    attributes: { class: "hero-name" },
                    properties: { textContent: "Farhad Ahmadi" },
                }, {
                    tag: "h1",
                    attributes: { class: "hero-skill" },
                    properties: { textContent: "Front-end dev" },
                }, {
                    tag: "div",
                    attributes: { class: "hero-media" },
                    children: [{
                        tag: iconBtn("instagram"),
                    }, {
                        tag: iconBtn("github"),
                    }, {
                        tag: iconBtn("lonkdin"),
                    }],
                }, {
                    tag: "div",
                    attributes: { class: "hero-action" },
                    children: [{
                        tag: textBtn("Hire me", "#")
                    }, {
                        tag: textBtn("Download CV", "#")
                    }],
                }],
        }]
    })
};