/**
 * check user-name input: user can not type number, just able to type English or Farsi
 * 1st: create regex =>
 * 1-1 => /^: Asserts the start of the string.
    - [آ-یA-Za-z\u0600-\u06FF\s,.!؟]+:
    - [ ]: Defines a character class, matching any one of the enclosed characters.
    - آ-ی - : Matches any Persian letter from 'آ' to 'ی'.
    - A-Za-z: Matches any English letter, both uppercase (A-Z) and lowercase (a-z).
    - \u0600-\u06FF: Matches any character in the Unicode range from U+0600 to U+06FF, which includes Arabic script characters used in Persian and other languages.
    - \s: Matches any whitespace character (spaces, tabs, line breaks).
    - ,.!؟: Matches any of these specific punctuation characters: comma, period, exclamation mark, and the Persian question mark (؟).
    - +: Ensures that one or more of the preceding characters are present.
 * 1-2 => $/: Asserts the end of the string.
 * 2rd step: check value of input by regex
 * @param {Element} input input element
 */
export const checkName = (input) => {
    // 1nd:
    const nameRegex = /^[آ-یA-Za-z\u0600-\u06FF\s,.!؟]+$/;
    // 2rd:
    if (!input.value.match(nameRegex)) {
        input.parentElement.classList.add("not-send")
        input.classList.add("error", "error-name")
    } else {
        input.parentElement.classList.remove("not-send")
        input.classList.remove("error", "error-name")
    }
}