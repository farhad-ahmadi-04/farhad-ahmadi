import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

const textIconBtn = (url, image, alt, text) => {
    return domGenerator({
        tag: "a",
        attributes: { class: "text-icon-btn", href: url },
        children: [{
            tag: 'button',
            children: [{
                tag: "img",
                attributes: { class: "icon-btn-image" },
                properties: { src: image, alt: alt }
            }, {
                tag: "span",
                attributes: { class: "primary--text-btn" },
                properties: { textContent: text }
            }]
        }]
    })
}
export default textIconBtn;