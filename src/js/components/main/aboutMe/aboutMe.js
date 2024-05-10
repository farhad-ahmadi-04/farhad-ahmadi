import generateElement from "../../../Assets/generateEle.js";
import render from "../../../Assets/render.js";
import label from "../../lable.js";
import mainImage from "../../mainImg.js";
import MyIntroduction from "../MyIntroduction.js";

/**
 * create about me section
 */
const aboutMe = (data) => {
    const aboutMeSec = document.querySelector('.about-me-sec')
    render(aboutMeSec, label("About me", "front end developer and also UI/UX designer"))

    render(aboutMeSec, generateElement("div", "about-me-sec-item"))

    const aboutMeSecItem = document.querySelector('.about-me-sec-item')
    // ---getting render from main image
    render(aboutMeSecItem, mainImage(data.about, "min"));
    render(aboutMeSecItem, MyIntroduction(data.about.aboutMe));

    render(aboutMeSecItem, generateElement("div", "introduction-item"))


}
export default aboutMe