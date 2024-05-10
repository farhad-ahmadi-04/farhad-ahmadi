import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import label from "../lable.js";
import serviceCard from "../serviceCard.js";


const servicesSection = domGenerator({
    tag: "section",
    attributes: { class: "landin-section service--section" },
    children: [{
        tag: label('Services', 'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam')
    }, {
        tag: 'div',
        attributes: { class: 'service-items' }
    }]
})
export default servicesSection