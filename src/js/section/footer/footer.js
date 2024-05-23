import fetchData from "../../Assets/fetchData.js"
import render from "../../Assets/render.js"
import mediaFooter from "./mediaFooter.js"
import contactFooterCom from "./contactFooter.js"
import nav from "../../components/nav.js"
import footerGen from "./footerGen.js"
import { footerLiList } from "../../components/list.js"

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
    render(navigation, nav(footerLiList, "list-items"))

    // 3nd & 4th :step:
    const mediaFooterDiv = document.querySelector(".media-footer")
    const contactFooterDiv = document.querySelector('.contact-footer')
    obj.then(data => {
        // 3:
        mediaFooter(data.socialMedia, mediaFooterDiv);
        // 4:
        contactFooterCom(data.about, data.icon, contactFooterDiv)
    }).
        catch(err => console.error(err))
}
export default footer