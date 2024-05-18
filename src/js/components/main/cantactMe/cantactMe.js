import render from "../../../Assets/render.js";
import label from "../../lable.js";
import contactForm from "./contactForm.js";
import { inputCom, textareaCom } from "./contactInput.js";

/**
 * create contact me section with all nessesaries components:
 * 1st: selct section & get render of label
 * 2nd: get render form form & select it
 * 3rd: getrender from inputs
 */
const cantactMe = () => {
    // 1st step:
    const cantactSec = document.querySelector('.cantact-me-sec')
    render(cantactSec, label("Contact Me", "Cultivating Connections: Reach Out and Connect with Me"))
    // 2nd dtep :
    render(cantactSec, contactForm())
    const Form = document.querySelector("#contact-form")
    const inputForm = document.querySelector(".submit-div")
    // 3th step:
    render(inputForm, inputCom("input", "text", "user-name", "Name", undefined))
    render(inputForm, inputCom("input", "email", "user-email", "Email", undefined))
    render(inputForm, inputCom("input", "text", "user-email", "Email", undefined))
    render(inputForm, textareaCom("textarea", "Message", undefined))

}
export default cantactMe