import render from "../../../Assets/render.js";
import label from "../../../components/lable.js";
import contactForm from "./contactForm.js";
import textBtn from "../../../components/buttons/textBtn.js";
import { inputCom, textareaCom } from "./contactInput.js";

/**
 * create contact me section with all nessesaries components:
 * 1st: selct section & get render of label
 * 2nd: get render form form & select it
 * 3rd: get render from inputs
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
    render(inputForm, inputCom("input", "text", "user-name", "Name", "input-tag user-name"))
    render(inputForm, inputCom("input", "email", "user-email", "Email", "input-tag user-email"))
    render(inputForm, inputCom("input", "number", "user-phone", "Phone number", "input-tag user-phone"))
    render(inputForm, textareaCom("textarea", "Message", "input-tag user-message"))

}
export default cantactMe