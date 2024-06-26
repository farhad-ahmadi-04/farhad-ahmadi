import { downloadURI } from "@/js/Assets/downloadFile.js";
import render from "@/js/Assets/render.js";
import iconBtn from "@//js/components/buttons/iconbtn.js";
import mainImage from "@/js/components/mainImg.js";
import heroItem from "@/js/section/main/hero/heroItem.js";



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

    const downloalBtn = document.querySelector(".download-resume")
    downloalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        downloadURI(data.about.resume, "Farhad-Ahmadi-resume.pdf")
    })
}



export default hero;