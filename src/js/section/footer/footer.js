import fetchData from "@/js/Assets/fetchData.js"
import render from "@/js/Assets/render.js"
import mediaFooter from "@/js//section/footer/mediaFooter.js"
import contactFooterCom from "@/js/section/footer/contactFooter.js"
import ul from "@/js/components/nav/ulList.js"
import footerGen from "@/js/section/footer/footerGen.js"
import { footerLiList } from "@/js/components/list.js"

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
const footer = async (app) => {
    // 1st step:
    render(app, footerGen("feri"))

    // 2nd step:
    const navigation = document.querySelector(".nav-footer")
    render(navigation, ul(footerLiList, "list-items"))

    // 3nd & 4th :step:
    const mediaFooterDiv = document.querySelector(".media-footer")
    const contactFooterDiv = document.querySelector('.contact-footer')

    const data = await import("@/js/Assets/data.json")

    // 3:
    mediaFooter(data.socialMedia, mediaFooterDiv);
    // 4:
    contactFooterCom(data.about, data.icon, contactFooterDiv)
}
export default footer