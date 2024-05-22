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

    // 3nd step:
    const mediaFooter = document.querySelector(".media-footer")
    obj.then(data => media(data.socialMedia, mediaFooter)).
        catch(err => console.error(err))

    // 4th step:

}

/**
 * loop on array from json file to get render from each item
 * @param {Array} media - all social media
 * @param {*} pos - html element
 */
function media(media, pos) {
    media.map(item => render(pos, iconBtn(item.icon, item.alt, item.address, "icon-btn")))
}
export default footer