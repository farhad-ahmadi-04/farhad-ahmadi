import render from "../../Assets/render.js"
import iconBtn from "../buttons/iconbtn.js"
/**
 * loop on array from json file to get render from each item
 * @param {Array} media - all social media
 * @param {Element} pos - html element
 */
const mediaFooter = (media, pos) => {
    media.map(item => render(pos, iconBtn(item.icon, item.alt, item.address, "icon-btn")))
}
export default mediaFooter