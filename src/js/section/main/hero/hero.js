import render from "../../../Assets/render.js";
import iconBtn from "../../../components/buttons/iconbtn.js";
import mainImage from "../../../components/mainImg.js";
import heroItem from "./heroItem.js";



/**
 * getting render of hero section components:
 * 1= get render hero item.
 * 2= set icon btn in hero item.
 * 3= get render from main image in hero section.
 * @param {object} data - data json server
 * @param {object} position - object of elements
 */
const hero = (data) => {
    const heroSection = document.querySelector('.hero-section');
    // hero: get render hero item---
    render(heroSection, heroItem(data));
    // ---set icon btn in hero item
    const heroMedia = document.querySelector('.hero-media')
    data.socialMedia.forEach(item => {
        render(heroMedia, iconBtn(item.icon, item.alt, item.address, "icon-btn"));
    })
    // ---get render from main image in hero section.
    const heroSecContainer = heroSection.querySelector(".container")
    render(heroSecContainer, mainImage(data.about, "max"));
}



export default hero;