import render from "../../Assets/render.js";
import mobileNavGen from "../../components/nav/mobileNavGen.js";

/**
 * create mobile navbar
 * 1st: get render for stracture
 * @param {Element} pos - element for appending to
 */
const mobileNavbar = (pos) => {
    // 1st:
    render(pos, mobileNavGen('feri'))
}
export default mobileNavbar