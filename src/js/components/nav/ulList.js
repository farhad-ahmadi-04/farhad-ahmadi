import domGenerator from "../../../../node_modules/dom-generator/dist/domGenerator.js";
import render from "../../Assets/render.js";

/**
 * 1st step: create ul element with
 * 2nd step: loop on array & get render of liList
 * 3rd step: return ul element
 * @param {obj} obj  objects that has data of ul li elements
 * @returns ul element
 */
const ul = (obj, cla) => {
    // 1st:
    const ulList = domGenerator({
        tag: 'ul',
        attributes: { class: cla },
    })
    // 2nd:
    obj.map(items => render(ulList, liItem(items.item, items.link, items.class)));
    // 3rd:
    return ulList
}


/**
 * create li element
 * @param {string} item - textContent
 * @param {string} link - link address
 * @param {string} cla - class name
 * @returns li element
 */
const liItem = (item, link, cla) => {
    return domGenerator({
        tag: 'li',
        attributes: { class: 'list--item' },
        children: [{
            tag: 'a',
            properties: { href: link, textContent: item },
            attributes: { class: cla }
        }]
    })
}

export default ul