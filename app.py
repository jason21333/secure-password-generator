from flask import Flask, render_template, request, jsonify
from pass import generate_password

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    length = request.json.get('length', 12)
    password = generate_password(length)
    return jsonify({'password': password})

if __name__ == "__main__":
    app.run(debug=True)