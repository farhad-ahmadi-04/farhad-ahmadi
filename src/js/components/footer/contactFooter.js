import render from "../../Assets/render.js";
import textIconBtn from "../buttons/textIconBtn.js";

/**
 * create component of contact:
 * 1st step: destruction data.
 * 2nd step: get render from textIcon btn by datas
 * function for get render from contact footer component
 * @param {object} about - about object that I want just email & phone number
 * @param {object} icon - icons of project 
 * @param {Element} pos - element for get render
 */
const contactFooterCom = (about, icon, pos) => {
    // 1st:
    const { email, phone } = about;
    const { email: emailIcon, phone: phoneIcon } = icon;

    // 2nd:
    render(pos, textIconBtn(emailIcon, "email address", email, "secondary-simple--textIcon-btn"))
    render(pos, textIconBtn(phoneIcon, "phone number", phone, "secondary-simple--textIcon-btn"))

}
export default contactFooterCom