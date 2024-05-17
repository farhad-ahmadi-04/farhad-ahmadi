import render from "../../../Assets/render.js";
import label from "../../lable.js";

/**
 * create contact me section with all nessesaries components:
 * 1st: selct section & get render of label
 */
const cantactMe = () => {
    // 1st step:
    const cantactSec = document.querySelector('.cantact-me-sec')
    render(cantactSec, label("Contact Me", "Cultivating Connections: Reach Out and Connect with Me"))
}
export default cantactMe