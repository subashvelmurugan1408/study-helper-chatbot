let lastQuestion = "";   // stores last asked question

// Add message to chat UI
function addMessage(text, className) {
  const chatBox = document.getElementById("chat-box");
  const div = document.createElement("div");
  div.className = className;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// When user sends question
function sendQuestion() {
  const input = document.getElementById("question");
  const question = input.value.trim();

  if (!question) return;

  lastQuestion = question;        // ✅ save question
  addMessage(question, "user-msg");

  input.value = "";

  // Tell user to choose mode
  addMessage(
    "Choose Explain, Example, or Summary.",
    "bot-msg"
  );
}

// When user clicks Explain / Example / Summary
function askWithMode(mode) {
  if (!lastQuestion) {
    addMessage("Please ask a question first.", "bot-msg");
    return;
  }

  addMessage(mode + ":", "user-msg");

  fetch("/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question: lastQuestion,
      mode: mode
    })
  })
  .then(res => res.json())
  .then(data => {
    addMessage(data.answer, "bot-msg");
  })
  .catch(() => {
    addMessage("Server error. Try again.", "bot-msg");
  });
}
