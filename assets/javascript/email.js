(function(){
    emailjs.init("user_h7QoFzXeBe0qoF85UUHmo");
 })();
 window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('smtp_server', 'contact_form', this);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        document.getElementById('sentMsg').innerText = 'Message was successfully sent! I will contact your within 24 hours.';
        console.log("Message was successfully sent! I will contact your within 24 hours.")
    });
};