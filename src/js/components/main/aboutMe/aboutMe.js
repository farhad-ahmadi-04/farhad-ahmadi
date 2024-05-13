import generateElement from "../../../Assets/generateEle.js";
import render from "../../../Assets/render.js";
import label from "../../lable.js";
import mainImage from "../../mainImg.js";
import MyIntroduction from "../MyIntroduction.js";

/**
 * create about me section
 */
const aboutMe = (data) => {
    // select section + add label
    const aboutMeSec = document.querySelector('.about-me-sec')
    render(aboutMeSec, label("About me", "front end developer and also UI/UX designer"))

    // create div for item (image & paragraph + btn)
    render(aboutMeSec, generateElement("div", "about-me-sec-item row-primary-container"))

    // ---selectr item & getting render from main image
    const aboutMeSecItem = document.querySelector('.about-me-sec-item')
    render(aboutMeSecItem, mainImage(data.about, "min"));

    // create div for paragraph & btn + selectr div + set text data to div 
    render(aboutMeSecItem, generateElement("div", "introduction-item col-primary-container "))
    const introductionItem = document.querySelector('.introduction-item')
    render(introductionItem, MyIntroduction(data.about.aboutMe));


}
export default aboutMe