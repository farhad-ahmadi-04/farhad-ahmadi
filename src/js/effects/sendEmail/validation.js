/**
 * loop on inputs and check it by call checkInput function
 * @param {HTMLCollection} form - inputs of form
 */
export const validateForm = (form) => {
    Array.from(form).map(item => {
        checkInput(item)
    })
}

/**
 * set condition to finde empty input:
 * set error class to empty inputs and remove error class from empty input
 * @param {Element} input - input element 
 */
const checkInput = (input) => {
    if (input.value === "") {
        input.classList.add("error")
    } else {
        input.classList.remove("error")
    }
}