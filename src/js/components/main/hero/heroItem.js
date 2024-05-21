import domGenerator from "../../../../../node_modules/dom-generator/dist/domGenerator.js";
import textBtn from "../../buttons/textBtn.js";

const heroItem = (data) => {
    return domGenerator({
        tag: "div",
        attributes: { class: "hero-item" },
        children: [{
            tag: "div",
            attributes: { class: "interview" },
            children: [{
                tag: "div",
                attributes: { class: "hero-interview" },
                children: [
                    {
                        tag: "p",
                        attributes: { class: "primary--text" },
                        properties: { textContent: "Hi I am" }
                    }, {
                        tag: "h3",
                        attributes: { class: "hero-name" },
                        properties: { textContent: data.about.own },
                    }
                ],
            }, {
                tag: "h1",
                attributes: { class: "hero-skill" },
                properties: { textContent: data.about.skill },
            }, {
                tag: "div",
                attributes: { class: "hero-media" },
            },
            ]
        }, {
            tag: "div",
            attributes: { class: "hero-action" },
            children: [{
                tag: textBtn("Hire me", "primary--text-btn"),
            }, {
                tag: textBtn("Download CV", "outline-primary--text-btn"),
            }],
        }, {
            tag: "div",
            attributes: { class: "hero-experience" },
            children: [{
                tag: 'div',
                attributes: { class: "Experiences" },
                children: [{
                    tag: "p",
                    attributes: { class: "Experiences-num" },
                    properties: { textContent: "2+" }
                }, {
                    tag: "p",
                    attributes: { class: "Experiences-text" },
                    properties: { textContent: "Experiences" }
                }]
            }, {
                tag: 'div',
                attributes: { class: "Experiences" },
                children: [{
                    tag: "p",
                    attributes: { class: "Experiences-num" },
                    properties: { textContent: "10+" }
                }, {
                    tag: "p",
                    attributes: { class: "Experiences-text" },
                    properties: { textContent: "Project done" }
                }]
            }, {
                tag: 'div',
                attributes: { class: "Experiences" },
                children: [{
                    tag: "p",
                    attributes: { class: "Experiences-num" },
                    properties: { textContent: "10+" }
                }, {
                    tag: "p",
                    attributes: { class: "Experiences-text" },
                    properties: { textContent: "Happy Clients" }
                }]
            }]
        }],
    })
}

export default heroItem