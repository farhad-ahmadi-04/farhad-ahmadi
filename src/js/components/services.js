import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";
import label from "./lable.js";

const servicesSection = domGenerator({
    tag: "section",
    attributes: { class: "service--section" },
    children: [{
        tag: label
    }, {
        tag: 'div',
        attributes: { class: 'service-items' },
    }]
})