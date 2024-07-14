import initEmail from "@/js/effects/sendEmail/initEmail.js"
import { validateForm } from "@/js/effects/sendEmail/validation.js";
/**
 * when user submit for this function call another function to send email
 * 1st step: select form & inputs.
 * 2nd step: set event handeler to submit form
 * 3rd step: prevent from load of page by submitting
 * 4th step: call validateForm and pass inputs to it.
 * 5th step: loop on inputs & set condition to send email.
 * 6th step call functions to send email.
 */
export const emailHandeler = () => {
    // 1st:
    const form = document.querySelector('#contact-form')
    const inputsForm = form.children[0].children
    // 2nd:
    form.addEventListener('submit', (e) => {
        // 3rd:
        e.preventDefault();
        // 4th:
        validateForm(inputsForm)
        // 5th:
        for (const item of inputsForm) {
            // 5-1:
            if (item.classList.contains('not-send')) return
        }
        // 6th:
        initEmail()
        sendMail()

    })
}

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
    }
    const submitBtn = document.querySelector(".submit-div").firstChild
    // 2nd: 
    const serviceID = 'service_dnejofy';
    const templateID = 'template_go2tfq5';
    submitBtn.value = "Sending..."

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
            document.querySelector('#contact-form').reset()
        }, (err) => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: err.message,
                showConfirmButton: false,
                timer: 2000
            });
            submitBtn.value = "Send";
        });
}