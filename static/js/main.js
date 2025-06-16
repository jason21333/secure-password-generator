document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('password-form');
    const passwordInput = document.getElementById('password');
    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('length-value');
    const copyButton = document.getElementById('copy-button');

    // Update length value display
    lengthSlider.addEventListener('input', function() {
        lengthValue.textContent = this.value;
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        generateNewPassword();
    });

    // Copy to clipboard functionality
    copyButton.addEventListener('click', function() {
        const password = passwordInput.value;
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                // Visual feedback for copy
                const originalText = copyButton.querySelector('span').textContent;
                copyButton.querySelector('span').textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.querySelector('span').textContent = originalText;
                }, 2000);
            });
        }
    });

    // Function to generate new password
    function generateNewPassword() {
        const formData = new FormData(form);
        const data = {
            length: formData.get('length'),
            uppercase: formData.get('uppercase') === 'on',
            lowercase: formData.get('lowercase') === 'on',
            numbers: formData.get('numbers') === 'on',
            symbols: formData.get('symbols') === 'on'
        };

        fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            passwordInput.value = data.password;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    // Generate initial password
    generateNewPassword();
});