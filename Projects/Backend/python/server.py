from flask import Flask, render_template

app = Flask(__name__)


# Define the route for the root URL of the website
@app.route('/')
def index():
    # render_template -> index.html -> context (Variables) -> Webpage
    leon = "Leon" 

    return render_template('index.html' , name=leon)


@app.route('/greet/<name>')
def greet(name):
    return "Hello, " + name

app.run(debug=True)
