import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";
import iconBtn from "./iconbtn.js";
import textBtn from "./textBtn.js";


const heroSection = () => {
    return domGenerator({
        tag: "section",
        attributes: { class: "hero-section" },
        children: [
            {
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
                                properties: { textContent: "Farhad Ahmadi" },
                            }
                        ],
                    }, {
                        tag: "h1",
                        attributes: { class: "hero-skill" },
                        properties: { textContent: "Front-end dev" },
                    }, {
                        tag: "div",
                        attributes: { class: "hero-media" },
                        children: [{
                            tag: iconBtn('public/instagram.svg', "instagram image", "instagram"),
                        }, {
                            tag: iconBtn('public/github.svg', 'githum logo', "github"),
                        }, {
                            tag: iconBtn('public/linkdin.svg', 'linkIn image', "LinkdIn"),
                        }]
                    },
                    ]
                }, {
                    tag: "div",
                    attributes: { class: "hero-action" },
                    children: [{
                        tag: textBtn("Hire me", "#"),
                    }, {
                        tag: textBtn("Download CV", "#"),
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
            }, {
                tag: "div",
                attributes: { class: "hero-item" },
                children: [{
                    tag: "div",
                    attributes: { class: "cercle-bg" },
                }, {
                    tag: "img",
                    attributes: { class: "hero-img" },
                    properties: { src: "", alt: "" }
                }]
            }]
    })
}
export default heroSection