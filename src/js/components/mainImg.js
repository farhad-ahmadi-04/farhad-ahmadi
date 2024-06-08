import domGenerator from "dom-generator";
/**
 * create my image componenet
 * @param {string} image - src of image
 * @param {String} alt - alt of image
 * @param {String} imgBg - imgBg is key world for set style
 * @returns html element
 */
const mainImage = (data, imgBg) => {
    return domGenerator({
        tag: "div",
        attributes: { class: "main-image" },
        children: [{
            tag: "div",
            attributes: { class: `${imgBg}-cercle-bg` },
            children: [{
                tag: "img",
                attributes: { class: "hero-img" },
                properties: { src: data.img, alt: data.alt }
            }],
        }]
    })
}
export default mainImage