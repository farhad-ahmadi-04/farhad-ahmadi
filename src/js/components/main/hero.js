import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";



const heroSection = domGenerator({
    tag: "section",
    attributes: { class: "landin-section hero-section" },
})

export default heroSection