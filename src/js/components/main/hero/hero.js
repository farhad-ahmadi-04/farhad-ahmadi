import render from "../../../Assets/render.js";
import iconBtn from "../../iconbtn.js";
import mainImage from "../../mainImg.js";
import heroItem from "./heroItem.js";

/**
 * getting render of hero section components:
 * 1= get render hero item.
 * 2= set icon btn in hero item.
 * 3= get render from main image in hero section.
 * @param {object} data - data json server
 * @param {object} position - object of elements
 */
const hero = (data, position) => {
    // hero: get render hero item---
    render(position.heroSection, heroItem(data));
    // ---set icon btn in hero item
    const heroMedia = document.querySelector('.hero-media')
    data.socialMedia.forEach(async item => {
        await render(heroMedia, iconBtn(item.icon, item.alt, item.address, "icon-btn"));
    })
    // ---get render from main image in hero section.
    render(position.heroSection, mainImage(data.about, "max"));
}
export default hero;