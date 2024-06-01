import emailjs from '../../../../node_modules/@emailjs/browser/dist/emailjs.js';
export const senEmail = () => {
    const form = document.querySelector('#contact-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("kjldc");
        sendMail()
    })
}

const sendMail = () => {

    const formData = {
        full_name: document.querySelector('.user-name').value,
        email_id: document.querySelector('.user-email').value,
        phone_number: document.querySelector('.user-phone').value,
        message: document.querySelector('.user-message').value
    }

    const serviceID = 'service_dnejofy';
    const templateID = 'template_vh6s0kk';

    emailjs.sendForm(serviceID, templateID, formData)
        .then(() => {
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
}