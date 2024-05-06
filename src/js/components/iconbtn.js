import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create component of icon btn to use everywhere we want
 * @param {string} image - icon of btn
 * @param {*} alt - alt value for image
 * @param {*} url - url of social media
 * @returns html element
 */
const iconBtn = (image, alt, url) => {
    return domGenerator({
        tag: "a",
        attributes: { class: "icon-btn", href: url },
        children: [{
            tag: 'button',
            children: [{
                tag: "img",
                attributes: { class: "icon-btn-image" },
                properties: { src: image, alt: alt }
            }]
        }]
    })
}
export default iconBtn