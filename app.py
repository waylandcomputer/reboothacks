from flask import Flask, render_template, send_from_directory


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/challenge")
def challenge():
    return render_template("challenge.html")


@app.route("/easter-egg")
def surprise():
    return render_template("easter-egg.html")


@app.route("/robots.txt")
def se1():
    return send_from_directory(app.root_path, "robots.txt")


@app.route("/sitemap.xml")
def se2():
    return send_from_directory(app.root_path, "sitemap.xml")
