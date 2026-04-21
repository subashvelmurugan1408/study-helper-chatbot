# 🎓 AI Study Helper

An AI-powered study assistant built with Flask, Groq (LLaMA 3), Firebase Authentication, and a React + Tailwind CSS frontend.

---

## ✨ Features

- 🔐 **User Authentication** — Sign up and login with Email & Password via Firebase
- 🤖 **AI Answers** — Ask any question and get instant answers powered by LLaMA 3.1
- 🎯 **Three Study Modes** — Choose how you want the answer:
  - **Explain** — Clear, detailed explanation
  - **Example** — Real-world example to understand better
  - **Summary** — Short and to the point
- 💬 **Chat Interface** — Clean chat UI with animated thinking indicator
- 🔒 **Protected API** — Backend routes secured with Firebase token verification

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, React (CDN), Tailwind CSS |
| Backend | Python, Flask |
| AI Model | LLaMA 3.1 8B via Groq API |
| Auth & DB | Firebase Authentication |

---

## 📁 Project Structure

```
ai_study_helper/
├── app.py                  # Flask backend
├── requirements.txt        # Python dependencies
├── .env                    # Secret keys (not pushed to GitHub)
├── serviceAccountKey.json  # Firebase admin key (not pushed to GitHub)
├── templates/
│   ├── login.html          # React login/signup page
│   └── index.html          # Main chat interface
└── static/
    ├── script.js           # Chat logic
    ├── style.css           # Styles
    └── firebase-config.js  # Firebase frontend config
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai_study_helper.git
cd ai_study_helper
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```
GROQ_API_KEY=your_groq_api_key_here
FLASK_DEBUG=false
```

Get your Groq API key from [console.groq.com](https://console.groq.com)

### 4. Set up Firebase

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project
3. Enable **Authentication → Email/Password**
4. Go to **Project Settings → Your Apps → Web App** and copy the config into `static/firebase-config.js`
5. Go to **Project Settings → Service Accounts → Generate new private key** and save it as `serviceAccountKey.json` in the project root

### 5. Run the app

```bash
python app.py
```

Open your browser and go to **http://localhost:5000**

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `GROQ_API_KEY` | Your Groq API key <img width="1919" height="855" alt="Screenshot 2026-04-21 080800" src="https://github.com/user-attachments/assets/3796bddf-3a96-472f-85d9-ec8d4904c448" /><img width="1874" height="847" alt="Screenshot 2026-04-21 080857" src="https://github.com/user-attachments/assets/3f7f5ade-435e-437c-ac11-3b72a60118ab" />

| `FLASK_DEBUG` | Set to `true` for development, `false` for production |

---

## 🔒 Security Notes

- Never push `.env` or `serviceAccountKey.json` to GitHub
- Both files are listed in `.gitignore`
- All API routes are protected with Firebase token verification
- User passwords are fully managed by Firebase — never stored in your code

---

## 📸 Screenshots




---

## 🙌 Acknowledgements

- [Groq](https://groq.com) — Ultra-fast LLM inference
- [Firebase](https://firebase.google.com) — Authentication
- [Meta LLaMA 3](https://ai.meta.com/llama/) — AI model
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [React](https://react.dev) — UI components
