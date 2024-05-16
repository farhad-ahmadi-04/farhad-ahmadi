import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create component of icon btn to use everywhere we want
 * @param {string} image - icon of btn
 * @param {string} alt - alt value for image
 * @param {string} url - url of social media
 * @param {string} url - style of btn
 * @returns html element
 */
const iconBtn = (image, alt, url, cla) => {
    return domGenerator({
        tag: "a",
        attributes: { class: cla, href: url },
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