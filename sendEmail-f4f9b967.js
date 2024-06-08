/**
 * init emailjs
 */
function initEmail() {
    emailjs.init({
        publicKey: "lpL6_GdMAVFsjJMOF",
    });
}

/**
 * check user-name input: user can not type number, just able to type English or Farsi
 * 1st step: select small tag
 * 2nd: create regex =>
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
 * 3rd step: check value of input by regex
 * @param {Element} input - input element
 * @param {string} message - message of error
 */
const checkName = (input, message) => {
    // 1st
    const small = input.nextElementSibling;
    // 2nd:
    const nameRegex = /^[آ-یA-Za-z\u0600-\u06FF\s,.!؟]+$/;
    // 3rd:
    if (input.value != "" && !input.value.match(nameRegex)) {
        input.parentElement.classList.add("not-send");
        input.classList.add("error", "error-name");
        small.textContent = message;
    } else {
        input.parentElement.classList.remove("not-send");
        input.classList.remove("error", "error-name");
        small.textContent = "";
    }
};

/**
 * chekc phone number
 * 1st step: select small tag
 * 2nd: step: regex =>
 * 1= ^\+?: Start of the string and an optional + character (for the country code).
 * 2= (\d{1,3})?: An optional country code with 1 to 3 digits.
 * 3= [-. (]*: Zero or more separators like dash, dot, space, or opening parenthesis.
 * 4= \d{3}: Three digits (first part of the phone number).
 * 5= [-. )]*: Zero or more separators like dash, dot, space, or closing parenthesis.
 * 6= \d{3}: Three digits (second part of the phone number).
 * 7= [-. ]*: Zero or more separators like dash, dot, or space.
 * 8= \d{4,9}: Four to nine digits (last part of the phone number).
 * 9= $: End of the string.
 * 3rd step: check value of input by regex
 * @param {Element} input - input element
 * @param {string} message - message of error
 */
const checkPhoneNumber = (input, message) => {
    // 1st
    const small = input.nextElementSibling;
    // 2nd:
    const phoneRegex = /^\+?(\d{1,3})?[-. (]*\d{3}[-. )]*\d{3}[-. ]*\d{4,9}$/;
    // 3rd:
    if (input.value != "" && !input.value.match(phoneRegex)) {
        input.parentElement.classList.add('not-send');
        input.classList.add('error', "error-phone");
        small.textContent = message;
    } else {
        input.parentElement.classList.remove('not-send');
        input.classList.remove('error', "error-phone");
        small.textContent = "";

    }
};

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
const checkMail = (input, message) => {
    // 1st
    const small = input.nextElementSibling;
    // 2nd:
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // 3rd:
    if (input.value != "" && !input.value.match(emailRegex)) {
        input.parentElement.classList.add("not-send");
        input.classList.add("error", "error-email");
        small.textContent = message;
    } else {
        input.parentElement.classList.remove("not-send");
        input.classList.remove("error", "error-email");
        small.textContent = "";
    }
};

/**
 * action when user type in message input
 * 1st step: select small tag
 * 2nd: remove error class + message
 * @param {Element} input input element
 */
const checkMessage = (input) => {
    // 1st:
    const small = input.nextElementSibling;
    // 2nd:
    input.parentElement.classList.remove("not-send");
    input.classList.remove("error", "error-name");
    small.textContent = "";
};

/**
 * loop on inputs and check it by call checkInput function
 * 1st step: check inputs when user submit the form
 * 2nd step: check inputs when user keyup
 * @param {HTMLCollection} form - inputs of form
 */
const validateForm = (form) => {
    Array.from(form).map(item => {
        // 1st:
        checkInput(item);
        // 2nd:
        item.addEventListener("keyup", () => {
            checkInput(item);
        });
    });
};

/**
 * set condition to finde empty input:
 * 3 - get input: det first child element that is input.
 * 2 - empty input: set error class 
 * 3 - user-name input: call checkName function to  the input has user-name class
 * @param {Element} input - div element 
 */
const checkInput = (input) => {
    const fild = input.firstChild;
    const small = fild.nextSibling;
    // 2 - empty input
    if (fild.value == "") {
        input.classList.add("not-send");
        fild.classList.add("error");
        small.textContent = "please fill the form";
    } else {
        // 3 - user-name input
        if (fild.classList.contains("user-name")) checkName(fild, `Please enter a valid name`);
        if (fild.classList.contains("user-phone")) checkPhoneNumber(fild, `Please enter a valid phone number`);
        if (fild.classList.contains("user-email")) checkMail(fild, `Please enter a valid email address.
    The email must include English letters, numbers, the '@' symbol, and a valid domain such as '.com' or '.org'.`);
        if (fild.classList.contains("user-message")) checkMessage(fild);
    }

};

/**
 * when user submit for this function call another function to send email
 * 1st step: select form & inputs.
 * 2nd step: set event handeler to submit form
 * 3rd step: prevent from load of page by submitting
 * 4th step: call validateForm and pass inputs to it.
 * 5th step: loop on inputs & set condition to send email.
 * 6th step call functions to send email.
 */
const emailHandeler = () => {
    // 1st:
    const form = document.querySelector('#contact-form');
    const inputsForm = form.children[0].children;
    // 2nd:
    form.addEventListener('submit', (e) => {
        // 3rd:
        e.preventDefault();
        // 4th:
        validateForm(inputsForm);
        // 5th:
        for (const item of inputsForm) {
            // 5-1:
            if (item.classList.contains('not-send')) return
        }
        // 6th:
        initEmail();
        sendMail();

    });
};

/**
 * send email:
 * 1st step: create select form value to create form template.
 * 2nd step: get serviceID & templateID.
 * 3rd step: send email by data.
 */
const sendMail = () => {
    // 1st:
    const formData = {
        full_name: document.querySelector('.user-name').value,
        email_id: document.querySelector('.user-email').value,
        phone_number: document.querySelector('.user-phone').value,
        message: document.querySelector('.user-message').value
    };
    const submitBtn = document.querySelector(".submit-div").firstChild;
    // 2nd: 
    const serviceID = 'service_dnejofy';
    const templateID = 'template_go2tfq5';
    submitBtn.value = "Sending...";

    // 3rd:
    emailjs.send(serviceID, templateID, formData)
        .then(() => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Message sent!",
                showConfirmButton: false,
                timer: 2000
            });
            submitBtn.value = "Send";
        }, (err) => {
            console.log(err);
        });
};

export { emailHandeler };
