import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import label from "../lable.js";
import mainImage from "../mainImg.js";

const aboutMESection = (text) => {
    return domGenerator({
        tag: 'section',
        attributes: { class: 'landin-section about-me-sec' },
        children: [{
            tag: label("About me", "front end developer and also UI/UX designer")
        }, {
            tag: "div",
            attributes: { class: "div-item" },
            children: [{
                tag: mainImage("public/hero--image.png", "Farhad Ahmadi", "min")
            }, {
                tag: "div",
                attributes: { class: "about-me-item" },
                children: [{
                    tag: 'p',
                    attributes: { class: "primary--text" },
                    properties: { textContent: text }
                }, /*{
                    // tag: textIconBtn("image", "alt", "Download CV")
                }*/]
            }]
        }]
    })
}
export default aboutMESection