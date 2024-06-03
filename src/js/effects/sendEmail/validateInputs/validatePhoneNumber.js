/**
 * 1st step: regex =>
 * 1= ^\+?: Start of the string and an optional + character (for the country code).
 * 2= (\d{1,3})?: An optional country code with 1 to 3 digits.
 * 3= [-. (]*: Zero or more separators like dash, dot, space, or opening parenthesis.
 * 4= \d{3}: Three digits (first part of the phone number).
 * 5= [-. )]*: Zero or more separators like dash, dot, space, or closing parenthesis.
 * 6= \d{3}: Three digits (second part of the phone number).
 * 7= [-. ]*: Zero or more separators like dash, dot, or space.
 * 8= \d{4,9}: Four to nine digits (last part of the phone number).
 * 9= $: End of the string.
 * 
 * 2nd step: check value of input by regex
 */
export const checkPhoneNumber = (input) => {
    // 1st:
    const phoneRegex = /^\+?(\d{1,3})?[-. (]*\d{3}[-. )]*\d{3}[-. ]*\d{4,9}$/;
    // 2nd:
    if (!input.value.match(phoneRegex)) {
        input.classList.add('error', "error-phone")
    } else {
        input.classList.remove('error', "error-phone")
    }
}