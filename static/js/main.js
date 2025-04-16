document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('password-form');
    const passwordField = document.getElementById('password');
    const generateBtn = document.getElementById('generate-btn');
    
    // Loading state handler
    const setLoading = (isLoading) => {
        generateBtn.disabled = isLoading;
        generateBtn.textContent = isLoading ? 'Generating...' : 'Generate Secure Password';
    };

    // Copy password functionality
    passwordField.addEventListener('click', async function() {
        if (this.textContent) {
            try {
                await navigator.clipboard.writeText(this.textContent);
                
                // Visual feedback
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.backgroundColor = '#dcfce7';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = '#f8fafc';
                }, 1000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    });

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        setLoading(true);
        
        const length = document.getElementById('length').value;

        try {
            const response = await fetch('/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ length: parseInt(length) })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            passwordField.textContent = data.password;
            
            // Subtle animation for new password
            passwordField.style.backgroundColor = '#e0e7ff';
            setTimeout(() => {
                passwordField.style.backgroundColor = '#f8fafc';
            }, 300);
            
        } catch (error) {
            console.error('Error:', error);
            passwordField.textContent = 'Failed to generate password. Please try again.';
            passwordField.style.color = '#ef4444';
            setTimeout(() => {
                passwordField.textContent = '';
                passwordField.style.color = 'inherit';
            }, 3000);
        } finally {
            setLoading(false);
        }
    });
});