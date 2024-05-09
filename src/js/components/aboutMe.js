import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";
import label from "./lable.js";

const aboutMESection = () => {
    return domGenerator({
        tag: 'section',
        children: [{
            tag: label("About me", "front end developer and also UI/UX designer")
        }]
    })
}