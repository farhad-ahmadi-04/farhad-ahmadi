import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";
import label from "./lable.js";
import serviceCard from "./serviceCard.js";


const servicesSection = domGenerator({
    tag: "section",
    attributes: { class: "service--section" },
    children: [{
        tag: label('Services', 'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam')
    }, {
        tag: 'div',
        attributes: { class: 'service-items' },
        children: [{
            tag: serviceCard("public/developer-64.png", "developer icon", "web developer", "test.....")
        }]
    }]
})
export default servicesSection