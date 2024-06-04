/**
 * check user-name input: user can not type number, just able to type English or Farsi
 * 1st step: create regex for En & Farsi words
 * 2nd step: check value of input by regex
 * @param {Element} input input element
 */
export const checkName = (input) => {
    // 1st:
    const regexName = /^[آ-یA-Za-z\u0600-\u06FF\s,.!؟]+$/;
    // 2nd:
    if (!input.value.match(regexName)) {
        input.parentElement.classList.add("not-send")
        input.classList.add("error", "error-name")
    } else {
        input.parentElement.classList.remove("not-send")
        input.classList.remove("error", "error-name")
    }
}