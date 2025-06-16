document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('password-form');
    const passwordOutput = document.getElementById('password-output');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const length = document.getElementById('password-length').value;

        fetch('/generate-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ length: length })
        })
        .then(response => response.json())
        .then(data => {
            passwordOutput.textContent = data.password;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});