import { checkName } from "./validateInputs/validateName.js";
import { checkPhoneNumber } from "./validateInputs/validatePhoneNumber.js";

/**
 * loop on inputs and check it by call checkInput function
 * 1st step: check inputs when user submit the form
 * 2nd step: check inputs when user keyup
 * @param {HTMLCollection} form - inputs of form
 */
export const validateForm = (form) => {
    Array.from(form).map(item => {
        // 1st:
        checkInput(item)
        // 2nd:
        item.addEventListener("keyup", () => {
            checkInput(item)
        })
    })
}

/**
 * set condition to finde empty input:
 * 3 - get input: det first child element that is input.
 * 2 - empty input: set error class 
 * 3 - user-name input: call checkName function to  the input has user-name class
 * @param {Element} input - div element 
 */
const checkInput = (input) => {
    const fild = input.firstChild

    console.log(fild);
    // 2 - empty input
    if (fild.value == "") {
        input.classList.add("not-send")
        fild.classList.add("error");
    }
    // 3 - user-name input
    if (fild.classList.contains("user-name")) checkName(fild)
    if (fild.classList.contains("user-phone")) checkPhoneNumber(fild)
    if (fild.classList.contains("user-email")) checkMail(fild)
}

