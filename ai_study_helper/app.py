from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
import os
from groq import Groq
from flask import Flask, render_template, request, jsonify, redirect

# Load environment variables
load_dotenv()

# Create Flask app FIRST
app = Flask(__name__)

# Create Groq client
GROQ_API_KEY=your_groq_key_here
@app.route("/")
def home():
    return redirect("/login")

@app.route("/chat")
def chat():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

# Ask route
@app.route("/api/ask", methods=["POST"])
def ask():
    try:
        data = request.get_json(force=True)
        question = data.get("question")
        mode = data.get("mode", "Explain")

        if not question:
            return jsonify({"answer": "Please enter a question."})

        prompt = f"""
        Answer the following question in a short, exam-oriented way.
        Mode: {mode}
        Question: {question}
        """

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3
        )

        answer = response.choices[0].message.content
        return jsonify({"answer": answer})

    except Exception as e:
        print("BACKEND ERROR:", e)
        return jsonify({"answer": "Backend error: " + str(e)}), 500


# Run app
if __name__ == "__main__":
    app.run(debug=True)
