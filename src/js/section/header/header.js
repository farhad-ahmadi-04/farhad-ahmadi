import render from "../../Assets/render.js";
import { liList } from "../../components/list.js";
import headerGen from "./headerGen.js";
import ul from "../../components/nav/ulList.js";
import textBtn from "../../components/buttons/textBtn.js";
import mobileNavbar from "./mobileNavbar.js";

/**
 * create header by using component
 * 1st step: get render from headerGen (stractur of header).
 * 2nd step:condition for media screen.
 * 3nd step:select menu nav div & get render from nav.
 * 4th step:get render from mobile navbar.
 * 5th step:select menu btn div & get render from text btn
 * @param {Element} pos position for append to
 */
const header = (pos) => {
    // 1st:
    render(pos, headerGen("feri"))

    // 2nd:
    const mediaQueryCondition = window.matchMedia('( min-width: 700px )')
    if (mediaQueryCondition.matches) {
        // 3rd:
        const navDiv = document.querySelector(".menu-nav");
        render(navDiv, ul(liList, "list-items"))
    } else {
        // 4th:
        mobileNavbar(pos)
    }


    // 5th:
    const menuBtnDiv = document.querySelector(".menu-btn");
    render(menuBtnDiv, textBtn("Hite me", "primary--text-btn"))
}
export default header