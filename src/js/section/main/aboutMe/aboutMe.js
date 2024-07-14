import generateElement from "@/js/Assets/generateEle.js";
import render from "@/js/Assets/render.js";
import label from "@/js/components/lable.js";
import { downloadURI } from "@/js/Assets/downloadFile.js"
import mainImage from "@/js/components/mainImg.js";
import MyIntroduction from "@/js/section/main/aboutMe/MyIntroduction.js";
import textIconBtn from "@/js/components/buttons/textIconBtn.js";
import { sliderAbout } from "@/js/section/main/aboutMe/aboutSlider.js";
import "@/js/section/main/aboutMe/aboutMeSec.scss";
import textBtn from "../../../components/buttons/textBtn";

/**
 * create about me section by get render from components
 * 1st step: select section + add label.
 * 2nd step: craete div for push (image + paragraph) & skills item.
 * 3rd step: create div for item (image & paragraph + btn).
 * 4th step: select item & getting render from main image.
 * 5th step: create div for paragraph & btn + selectr div + set text data to div.
 * 6th step: call sliderAbout component.
 * @param {object} data - data of json file
 */
const aboutMe = (data) => {
    // 1st:
    const aboutMeSec = document.querySelector('.about-me-sec')
    render(aboutMeSec, generateElement("div", "container col-primary-container"))

    const aboutMeContainer = document.querySelector('.about-me-sec>.container')
    render(aboutMeContainer, label("About me", "front end developer and also UI/UX designer"))

    // 2nd:
    render(aboutMeContainer, generateElement("div", "about-me-item col-primary-container"))
    const aboutMeItem = document.querySelector('.about-me-item')

    // 3rd:
    render(aboutMeItem, generateElement("div", "about-me-sec-item row-primary-container"))

    // 4th:
    const aboutMeSecItem = document.querySelector('.about-me-sec-item')
    render(aboutMeSecItem, mainImage(data.about, "min"));

    // 5th:
    render(aboutMeSecItem, generateElement("div", "introduction-item col-primary-container "))
    const introductionItem = document.querySelector('.introduction-item')
    render(introductionItem, MyIntroduction(data.about.aboutMe));
    render(introductionItem, textBtn("Hire me", "primary--text-btn hireMe--btn"));

    // 6th:
    sliderAbout(aboutMeItem, data)

}
export default aboutMe