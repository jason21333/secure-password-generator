from flask import Flask, render_template, request, jsonify
from password_generator import generate_password

app = Flask(__name__)

@app.after_request
def add_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Content-Security-Policy'] = "default-src 'self'"
    return response

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'Invalid JSON'}), 400
            
        length = data.get('length', 12)
        if not isinstance(length, int) or length < 4 or length > 128:
            return jsonify({'error': 'Invalid length. Must be between 4 and 128'}), 400
            
        password = generate_password(length)
        return jsonify({'password': password})
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)