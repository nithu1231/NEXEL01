document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;
        const phoneInput = document.getElementById('phone').value;

        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const phoneError = document.getElementById('phoneError');
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        function validatePassword(password) {
            return password.length >= 6;
        }

        function validatePhone(phone) {
            const re = /^\d{10}$/; 
            return re.test(phone);
        }

        
        emailError.innerText = '';
        passwordError.innerText = '';
        phoneError.innerText = '';

       
        if (!validateEmail(emailInput)) {
            emailError.innerText = 'Please enter a valid email address';
        }

        if (!validatePassword(passwordInput)) {
            passwordError.innerText = 'Password must be at least 6 characters long';
        }

        if (!validatePhone(phoneInput)) {
            phoneError.innerText = 'Please enter a valid phone number (10 digits)';
        }

     
        if (validateEmail(emailInput) && validatePassword(passwordInput) && validatePhone(phoneInput)) {
            displayInputValues(emailInput, passwordInput, phoneInput);
        }
    });
    function displayInputValues(email, password, phone) {
        const displayDiv = document.getElementById('displayInput');
        displayDiv.innerHTML = `
            <h2>Submitted Input:</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
        `;
    }
});
