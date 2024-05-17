import render from "../../../Assets/render.js";
import label from "../../lable.js";
import contactForm from "./contactForm.js";

/**
 * create contact me section with all nessesaries components:
 * 1st: selct section & get render of label
 * 2nd: get render form form & select it
 */
const cantactMe = () => {
    // 1st step:
    const cantactSec = document.querySelector('.cantact-me-sec')
    render(cantactSec, label("Contact Me", "Cultivating Connections: Reach Out and Connect with Me"))
    // 2nd dtep :
    render(cantactSec, contactForm())
    const contactForm = document.querySelector("#contact-form")
}
export default cantactMe