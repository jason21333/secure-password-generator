from flask import Flask, render_template, request, jsonify
from password_generator import generate_password

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    length = int(data.get('length', 12))
    uppercase = data.get('uppercase', True)
    lowercase = data.get('lowercase', True)
    numbers = data.get('numbers', True)
    symbols = data.get('symbols', True)
    
    password = generate_password(
        length=length,
        uppercase=uppercase,
        lowercase=lowercase,
        numbers=numbers,
        symbols=symbols
    )
    return jsonify({'password': password})

if __name__ == "__main__":
    app.run(debug=True)