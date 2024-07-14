import domGenerator from "dom-generator";
import "@/js/section/main/serviceSec/serviceCard.scss";

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
        attributes: { class: 'service-card' },
        children: [{
            tag: 'div',
            attributes: { class: 'service-head' },
            children: [{
                tag: 'img',
                attributes: { class: 'head-img' },
                properties: { src: img, alt: alt }
            }, {
                tag: "h5",
                attributes: { class: 'head-title' },
                properties: { textContent: title }
            }]
        }, {
            tag: "div",
            attributes: { class: 'service-body' },
            children: [{
                tag: "p",
                attributes: { class: 'body-text primary--text' },
                properties: { textContent: text }
            }]
        }]
    })
}
export default serviceCard