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

  // Create thinking message
  const chatBox = document.getElementById("chat-box");
  const thinkingDiv = document.createElement("div");

  thinkingDiv.className = "bot-msg thinking-msg";
  thinkingDiv.innerText = "🧠 Understanding your question...";

  chatBox.appendChild(thinkingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Smart thinking messages
  const thinkingSteps = [
    "🧠 Understanding your question...",
    "🔍 Analyzing the context...",
    "📚 Retrieving relevant knowledge...",
    "⚡ Generating the response...",
    "✍️ Finalizing your answer..."
  ];

  let stepIndex = 0;

  const thinkingInterval = setInterval(() => {

    stepIndex++;

    if (stepIndex < thinkingSteps.length) {
      thinkingDiv.innerText = thinkingSteps[stepIndex];
    }

  }, 500);

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

    // Stop thinking animation
    clearInterval(thinkingInterval);

    // Remove thinking message
    thinkingDiv.remove();

    // Show actual answer
    addMessage(data.answer, "bot-msg");

  })

  .catch(error => {

    console.error(error);

    clearInterval(thinkingInterval);

    thinkingDiv.remove();

    addMessage(
      "Server error. Please try again.",
      "bot-msg"
    );

  });
}
let lastQuestion = "";

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

  lastQuestion = question;

  addMessage(question, "user-msg");

  input.value = "";

  addMessage(
    "Choose Explain, Example, or Summary.",
    "bot-msg"
  );
}


// Explain / Example / Summary
function askWithMode(mode) {

  if (!lastQuestion) {

    addMessage(
      "Please ask a question first.",
      "bot-msg"
    );

    return;
  }

  addMessage(
    mode + ":",
    "user-msg"
  );


  // -----------------------------
  // THINKING MESSAGE
  // -----------------------------

  const chatBox = document.getElementById("chat-box");

  const thinkingDiv = document.createElement("div");

  thinkingDiv.className = "bot-msg thinking-msg";

  thinkingDiv.innerText =
    "🧠 Understanding your question...";

  chatBox.appendChild(thinkingDiv);

  chatBox.scrollTop = chatBox.scrollHeight;


  // -----------------------------
  // THINKING STEPS
  // -----------------------------

  const thinkingSteps = [

    "🧠 Understanding your question...",

    "🔍 Analyzing the context...",

    "📚 Retrieving relevant knowledge...",

    "⚡ Generating the response...",

    "✍️ Finalizing your answer..."

  ];

  let stepIndex = 0;


  const thinkingInterval = setInterval(() => {

    stepIndex++;

    if (stepIndex < thinkingSteps.length) {

      thinkingDiv.innerText =
        thinkingSteps[stepIndex];

    }

  }, 500);


  // -----------------------------
  // SEND TO FLASK
  // -----------------------------

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

    // Stop animation
    clearInterval(thinkingInterval);

    // Remove thinking message
    thinkingDiv.remove();

    // Display answer
    addMessage(
      data.answer,
      "bot-msg"
    );

  })

  .catch(error => {

    console.error(error);

    clearInterval(thinkingInterval);

    thinkingDiv.remove();

    addMessage(
      "Server error. Please try again.",
      "bot-msg"
    );

  });
}
