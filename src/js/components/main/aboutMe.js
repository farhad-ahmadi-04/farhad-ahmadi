import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import label from "../lable.js";
import mainImage from "../mainImg.js";

const aboutMESection = () => {
    return domGenerator({
        tag: 'section',
        attributes: { class: 'landin-section' },
        children: [{
            tag: label("About me", "front end developer and also UI/UX designer")
        }, {
            tag: "div",
            attributes: { class: "div-item" },
            children: [{
                tag: mainImage("public/hero--image.png", "Farhad Ahmadi", "min")
            }]
        }]
    })
}
export default aboutMESection