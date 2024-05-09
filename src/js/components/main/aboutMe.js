import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import label from "../lable.js";
import aboutMePart from "./aboutMePart.js";

const aboutMESection = () => {
    return domGenerator({
        tag: 'section',
        children: [{
            tag: label("About me", "front end developer and also UI/UX designer")
        }, {
            tag: "div",
            attributes: { class: "div-item" },
            children: [{
                tag: aboutMePart("public/hero--image.png", "Farhad Ahmadi")
            }]
        }]
    })
}
export default aboutMESection