from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

greetings = ["Hello!", "Hi there!", "Greetings!", "Salutations!", "Howdy!", "Hey!"]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/greet', methods=['POST'])
def greet():
    greeting = random.choice(greetings)
    response = {"greeting": greeting}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)