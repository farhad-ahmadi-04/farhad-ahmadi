import initEmail from "./initEmail.js"

/**
 * when user submit for this function call another function to send email
 */
export const emailHandeler = () => {
    const form = document.querySelector('#contact-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
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

    // 2nd: 
    const serviceID = 'service_dnejofy';
    const templateID = 'template_go2tfq5';

    emailjs.send(serviceID, templateID, formData)
        .then(() => {
            alert('Sent!');
        }, (err) => {
            console.log(err);
        });
}