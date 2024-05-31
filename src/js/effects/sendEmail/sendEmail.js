export const senEmail = () => {
    const formData = {
        form: document.querySelector('#contact-form'),
        userName: document.querySelector('.user-name'),
        userEmail: document.querySelector('.user-email'),
        userPhone: document.querySelector('.user-phone'),
        userMessage: document.querySelector('.user-message')
    }
    formData.form.addEventListener('submit', (e) => {
        e.preventDefault();
        email(formData)
    })
}

const email = (form) => {
    const fullMessage = message(form);

    Email.send({
        SecureToken: "5a268bd5-f4ab-4c9c-be0a-eb0586ee368e",
        To: 'farhad.13ahmadi.83@gmail.com',
        From: "farhad.13ahmadi.83@gmail.com",
        Subject: "portfolio email",
        Body: fullMessage
    }).then(
        message => alert(message)
    );
}

const message = (form) => {
    return `full name: ${form.userName.value}<br> Email: ${form.userEmail.value}<br> phone number: ${form.userPhone.value}<br> Message: ${form.userMessage.value}`;
}