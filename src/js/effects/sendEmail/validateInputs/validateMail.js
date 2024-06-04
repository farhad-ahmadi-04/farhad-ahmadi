/**
 * create validate for email => 
 * 1st step: select small tag
 * 2nd : create regex for email => 
 * 1-1 => ^: Asserts the start of the string.
 * 1-2 => [a-zA-Z0-9._%+-]: Matches any character from this set: lowercase letters (a-z), uppercase letters (A-Z), digits (0-9), period (.), underscore (_), percent sign (%), plus sign (+), and hyphen (-).
 * 1-3 => +: Ensures that one or more characters from the preceding set are present.
 * 1-4 => @: Matches the @ character.
 * 1-5 => [a-zA-Z0-9.-]: Matches any character from this set: lowercase letters (a-z), uppercase letters (A-Z), digits (0-9), period (.), and hyphen (-).
 * 1-6 => +: Ensures that one or more characters from the preceding set are present.
 * 1-7 => \.: Matches a literal period (.).
 * 1-8 => [a-zA-Z]: Matches any character from this set: lowercase letters (a-z) and uppercase letters (A-Z).
 * 1-9 => {2,}: Ensures that at least two or more characters from the preceding set are present.
 * 1-10 => $: Asserts the end of the string.
 * 3rd: check condition by regex
 * @param {Element} input - input element by email type
 */
export const checkMail = (input, message) => {
    // 1st
    const small = input.nextElementSibling
    // 2nd:
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // 3rd:
    if (input.value != "" && !input.value.match(emailRegex)) {
        input.parentElement.classList.add("not-send")
        input.classList.add("error", "error-email")
        small.textContent = message
    } else {
        input.parentElement.classList.remove("not-send")
        input.classList.remove("error", "error-email")
        small.textContent = ""
    }
}