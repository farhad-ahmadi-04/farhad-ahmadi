import generateElement from "../../../Assets/generateEle.js";
import render from "../../../Assets/render.js";
import label from "../../../components/lable.js";
import mainImage from "../../../components/mainImg.js";
import MyIntroduction from "./MyIntroduction.js";
import textIconBtn from "../../../components/buttons/textIconBtn.js";
import skillCard from "./skillCard.js";

/**
 * create about me section
 */
const aboutMe = (data) => {
    // select section + add label
    const aboutMeSec = document.querySelector('.about-me-sec')
    render(aboutMeSec, label("About me", "front end developer and also UI/UX designer"))

    // craete div for push (image + paragraph) & skills item
    render(aboutMeSec, generateElement("div", "about-me-item col-primary-container"))
    const aboutMeItem = document.querySelector('.about-me-item')

    // create div for item (image & paragraph + btn)
    render(aboutMeItem, generateElement("div", "about-me-sec-item row-primary-container"))

    // ---selectr item & getting render from main image
    const aboutMeSecItem = document.querySelector('.about-me-sec-item')
    render(aboutMeSecItem, mainImage(data.about, "min"));

    // create div for paragraph & btn + selectr div + set text data to div 
    render(aboutMeSecItem, generateElement("div", "introduction-item col-primary-container "))
    const introductionItem = document.querySelector('.introduction-item')
    render(introductionItem, MyIntroduction(data.about.aboutMe));
    render(introductionItem, textIconBtn(data.icon.textIcon, "download icon", "Download CV", "primary--textIcon-btn"));

    // create div of skills
    render(aboutMeItem, generateElement("div", "skills row-primary-container"))
    const skills = document.querySelector('.skills')
    // create card by map method:
    const skillCards = data.skill.map(item => render(skills, skillCard(item)))

}
export default aboutMe