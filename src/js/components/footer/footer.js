import fetchData from "../../Assets/fetchData.js"
import render from "../../Assets/render.js"
import iconBtn from "../buttons/iconbtn.js"
import nav from "../nav.js"
import footerGen from "./footerGen.js"

// get data from json file
const obj = fetchData("src/js/Assets/data.json")


/**
 * send components to footer
 * @param {HTMLElement} app - html element to get render 
 */
const footer = (app) => {
    // 1st step:
    render(app, footerGen("feri"))

    // 2nd step:
    const navigation = document.querySelector(".nav-footer")
    render(navigation, nav())

    // 2nd step:
    const mediaFooter = document.querySelector(".media-footer")
    obj.then(data => media(data.socialMedia, mediaFooter)).
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
export default footer