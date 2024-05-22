import render from "../../Assets/render.js";
import { liList } from "../list.js";
import headerGen from "./headerGen.js";
import nav from "../nav.js";
import textBtn from "../buttons/textBtn.js";

/**
 * create header by using component
 * 1st step: get render from headerGen (stractur of header).
 * 2nd step:select menu nav div & get render from nav.
 * 3rd step:select menu btn div & get render from text btn
 * @param {Element} pos position for append to
 */
const header = (pos) => {
    // 1st:
    render(pos, headerGen("feri"))

    // 2nd:
    const navDiv = document.querySelector(".menu-nav");
    render(navDiv, nav(liList, "list-items"))

    // 3rd:
    const menuBtnDiv = document.querySelector(".menu-btn");
    render(menuBtnDiv, textBtn("Hite me", "primary--text-btn"))
}
export default header