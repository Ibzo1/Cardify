import openai
import flask
import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
import socket
from functions import *

app = Flask(__name__)
CORS(app, support_credentials=True)

openai.api_key = ""

@app.route("/users", methods=["OPTIONS", "GET"])
#@cross_origin(headers=['Content-Type','Authorization', 'Access-Control-Allow-Origin'])
def users():
    print("sick")
    response = flask.jsonify({'some': 'data'})
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response
    with open("users.json", 'r') as f:
        data = json.load(f)
        
        data.append({
            'username': "user4",
            "pers": ["hamster"]
        })

        return flask.jsonify(data)

@app.route("/get_course", methods=["POST"])
def get_course():
    if request.method == "POST":
        data = request.get_json(force=True)
        lessons = get_lessons(data['subject'])
        print(lessons)
        response = flask.jsonify(lessons)
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response

@app.route("/get_flashcards", methods=["POST"])
def get_flashcards():
    if request.method == "POST":
        data = request.get_json(force=True)
        flashcards = get_cards(data['lesson'], data['specifics'], data['number_of_flashcards'])
        response = flask.jsonify(flashcards)
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response


if __name__ == "__main__":
    app.run("127.0.0.1", 6969)
