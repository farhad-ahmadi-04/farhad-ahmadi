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
        tag: "button",
        attrbute: { class: "icon-btn" },
        children: [{
            tag: 'a',
            attrbute: { href: url },
            children: [{
                tag: "img",
                attrbute: { class: "icon-btn-image" },
                properties: { src: image, alt: alt }
            }]
        }]
    })
}
export default iconBtn