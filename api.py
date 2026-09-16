import os
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

HF_TOKEN = os.environ.get("HF_TOKEN")

@app.route("/generate", methods=["POST"])
def generate():

    data = request.get_json()

    prompt = data.get("prompt", "").strip()

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    if not HF_TOKEN:
        return jsonify({"error": "HF_TOKEN is not configured"}), 500

    headers = {
        "Authorization": f"Bearer {HF_TOKEN}"
    }

    payload = {
        "inputs": prompt
    }

    response = requests.post(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        headers=headers,
        json=payload,
        timeout=120
    )

    if response.status_code != 200:
        return jsonify({
            "error": "AI generation failed",
            "details": response.text
        }), response.status_code

    return response.content, 200, {
        "Content-Type": "image/png"
    }


@app.route("/")
def home():
    return "AI Video Maker API is running"


if __name__ == "__main__":
    app.run()
