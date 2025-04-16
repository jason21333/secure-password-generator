# Secure Password Generator

A web-based secure password generator built with Flask that allows users to generate strong, cryptographically secure passwords with customizable length.

## Features

- Generate secure passwords with customizable length (4-128 characters)
- Ensures password strength by including:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Special characters
- Clean and responsive user interface
- Copy password to clipboard with one click
- Security headers implemented
- Docker support for easy deployment

## Project Structure

```
password-generator-web/
├── app.py                 # Main Flask application entry point
├── password_generator.py  # Core password generation logic
├── requirements.txt      # Python dependencies
├── Dockerfile           # Docker configuration
├── static/             # Static assets
│   ├── css/
│   │   └── styles.css  # Application styling
│   └── js/
│       └── main.js     # Frontend JavaScript
└── templates/          # HTML templates
    ├── base.html       # Base template with common layout
    └── index.html      # Main page template
```

## Technical Details

### Backend (Python/Flask)

#### app.py
- Flask application setup
- Route handlers for the web interface
- Security headers implementation
- Error handling for invalid inputs

#### password_generator.py
- Core password generation logic
- Ensures cryptographic security
- Guarantees character set requirements
- Length validation (4-128 characters)

### Frontend

#### Templates
- `base.html`: Base template with common layout and meta tags
- `index.html`: Main interface for password generation

#### Static Files
- `styles.css`: Responsive design with modern UI
- `main.js`: Handles:
  - Form submission
  - API communication
  - Copy to clipboard functionality
  - Dynamic UI updates

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd password-generator-web
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```

5. Access the application at: http://localhost:5000

## Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t password-generator .
   ```

2. Run the container:
   ```bash
   docker run -p 5000:5000 password-generator
   ```

## API Documentation

### Generate Password Endpoint

- **URL**: `/generate`
- **Method**: `POST`
- **Content-Type**: `application/json`

**Request Body**:
```json
{
    "length": 12  // Password length (4-128)
}
```

**Success Response**:
```json
{
    "password": "generated_password_here"
}
```

**Error Response**:
```json
{
    "error": "Error message here"
}
```

## Security Features

1. Secure Password Generation:
   - Uses Python's `secrets` module for cryptographic operations
   - Guarantees character set inclusion
   - Random character distribution

2. Web Security Headers:
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: DENY
   - X-XSS-Protection: 1; mode=block
   - Content-Security-Policy: default-src 'self'

3. Input Validation:
   - Length constraints (4-128 characters)
   - Type checking
   - Error handling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.