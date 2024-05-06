import domGenerator from "../../../node_modules/dom-generator/dist/domGenerator.js";

/**
 * create service card 
 * @param {string} img - src of image
 * @param {string} alt - alt of image
 * @param {string} title - title of card
 * @param {string} text - text of card
 * @returns html element => services card
 */
const serviceCard = (img, alt, title, text) => {
    return domGenerator({
        tag: 'div',
        attrbuites: { class: 'service-card' },
        children: [{
            tag: 'div',
            attrbuites: { class: 'service-head' },
            children: [{
                tag: 'img',
                attrbuites: { class: 'head-img' },
                properties: { src: img, alt: alt }
            }, {
                tag: "h5",
                attrbuites: { class: 'head-title' },
                properties: { textContent: title }
            }]
        }, {
            tag: "div",
            attrbuites: { class: 'service-body' },
            children: [{
                tag: "p",
                attrbuites: { class: 'body-text' },
                properties: { textContent: text }
            }]
        }]
    })
}
export default serviceCard