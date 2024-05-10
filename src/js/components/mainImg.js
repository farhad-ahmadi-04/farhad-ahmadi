import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create my image componenet
 * @param {string} image - src of image
 * @param {String} alt - alt of image
 * @param {String} imgBg - imgBg is key world for set style
 * @returns html element
 */
const mainImage = (image, alt, imgBg) => {
    return domGenerator({
        tag: "div",
        attributes: { class: "hero-item hero-right-item" },
        children: [{
            tag: "div",
            attributes: { class: `${imgBg}-cercle-bg` },
            children: [{
                tag: "img",
                attributes: { class: "hero-img" },
                properties: { src: image, alt: alt }
            }],
        }]
    })
}
export default mainImage