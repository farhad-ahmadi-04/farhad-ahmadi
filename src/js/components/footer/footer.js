import fetchData from "../../Assets/fetchData.js"
import render from "../../Assets/render.js"
import iconBtn from "../buttons/iconbtn.js"
import textIconBtn from "../buttons/textIconBtn.js"
import nav from "../nav.js"
import footerGen from "./footerGen.js"

// get data from json file
const obj = fetchData("src/js/Assets/data.json")


/**
 * send components to footer:
 * 1st: generate assets stracture of footer
 * 2nd: select nav div & getrender from navi in footer
 * 3rd: select media div & get data from json and loop on that then pass it to media function.
 * 4th: select contact-footer div & grt rendr from data to this div...:)
 * @param {HTMLElement} app - html element to get render 
 */
const footer = (app) => {
    // 1st step:
    render(app, footerGen("feri"))

    // 2nd step:
    const navigation = document.querySelector(".nav-footer")
    render(navigation, nav())

    // 3nd & 4th :step:
    const mediaFooter = document.querySelector(".media-footer")
    const contactFooter = document.querySelector('.contact-footer')
    obj.then(data => {
        // 3:
        media(data.socialMedia, mediaFooter);
        // 4:
        contactFooterCom(data.about, data.icon, contactFooter)
    }).
        catch(err => console.error(err))
}

/**
 * loop on array from json file to get render from each item
 * @param {Array} media - all social media
 * @param {*} pos - html element
 */
function media(media, pos) {
    media.map(item => render(pos, iconBtn(item.icon, item.alt, item.address, "icon-btn")))
}

/**
 * create component of contact:
 * 1st step: destruction data.
 * 2nd step: get render from textIcon btn by datas
 * function for get render from contact footer component
 * @param {object} about - about object that I want just email & phone number
 * @param {object} icon - icons of project 
 * @param {Element} pos - element for get render
 */
function contactFooterCom(about, icon, pos) {
    // 1st:
    const { email, phone } = about;
    const { email: emailIcon, phone: phoneIcon } = icon;

    // 2nd:
    render(pos, textIconBtn(emailIcon, "email address", email, "secondary-simple--textIcon-btn"))
    render(pos, textIconBtn(phoneIcon, "phone number", phone, "secondary-simple--textIcon-btn"))

}
export default footer