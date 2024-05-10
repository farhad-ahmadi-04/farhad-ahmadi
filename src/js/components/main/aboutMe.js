import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import label from "../lable.js";

/**
 * create about me section
 */
const aboutMESection = domGenerator({
    tag: 'section',
    attributes: { class: 'landin-section about-me-sec' },
    children: [{
        tag: label("About me", "front end developer and also UI/UX designer")
    }, {
        tag: "div",
        attributes: { class: "about-me-sec-item" },
    }]
});
export default aboutMESection