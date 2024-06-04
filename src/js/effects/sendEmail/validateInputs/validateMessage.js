/**
 * action when user type in message input
 * 1st step: select small tag
 * 2nd: remove error class + message
 * @param {Element} input input element
 */
export const checkMessage = (input) => {
    // 1st:
    const small = input.nextElementSibling
    // 2nd:
    input.parentElement.classList.remove("not-send")
    input.classList.remove("error", "error-name")
    small.textContent = ""
}