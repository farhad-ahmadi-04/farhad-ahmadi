import render from "../../../Assets/render.js";
import label from "../../lable.js";
import contactForm from "./contactForm.js";
import textBtn from "../../buttons/textBtn.js";
import { inputCom, textareaCom } from "./contactInput.js";

/**
 * create contact me section with all nessesaries components:
 * 1st: selct section & get render of label
 * 2nd: get render form form & select it
 * 3rd: get render from inputs
 * 4rd: select div of sub,it button & get render from button
 */
const cantactMe = () => {
    // 1st step:
    const cantactSec = document.querySelector('.cantact-me-sec')
    render(cantactSec, label("Contact Me", "Cultivating Connections: Reach Out and Connect with Me"))
    // 2nd dtep :
    render(cantactSec, contactForm())
    const Form = document.querySelector("#contact-form")
    const inputForm = document.querySelector(".inputs")
    // 3th step:
    render(inputForm, inputCom("input", "text", "user-name", "Name", undefined))
    render(inputForm, inputCom("input", "email", "user-email", "Email", undefined))
    render(inputForm, inputCom("input", "text", "user-email", "Email", undefined))
    render(inputForm, textareaCom("textarea", "Message", undefined))
    // 4th step:
    const submitFormBtn = document.querySelector(".submit-div")
    render(submitFormBtn, textBtn("Send", "outline-primary--text-btn"))

}
export default cantactMe