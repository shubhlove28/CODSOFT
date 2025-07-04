function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  if (userText === "") return;

  appendMessage("user", userText);
  input.value = "";

  setTimeout(() => {
    const botReply = getBotResponse(userText.toLowerCase());
    appendMessage("bot", botReply);
  }, 500);
}

function handleKeyPress(event) {
  if (event.key === "Enter") sendMessage();
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chatBox");
  const messageDiv = document.createElement("div");
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  // Greeting
  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    return "Hello! 👋 I'm your CS Assistant. Ask me anything about computer science.";
  }

  // Programming languages
  if (input.includes("language") || input.includes("python") || input.includes("java") || input.includes("c++")) {
    return "Some popular languages are Python, Java, C++, and JavaScript. Choose based on your goals.";
  }

  // Web development
  if (input.includes("web") || input.includes("html") || input.includes("css") || input.includes("javascript")) {
    return "For web dev, start with HTML, CSS, JavaScript, then explore frameworks like React or Node.js.";
  }

  // Data structures and algorithms
  if (input.includes("dsa") || input.includes("data structure") || input.includes("algorithm")) {
    return "Study arrays, stacks, queues, linked lists, trees, and graphs. Practice with LeetCode or HackerRank!";
  }

  // AI & ML
  if (input.includes("ai") || input.includes("machine learning") || input.includes("artificial intelligence")) {
    return "AI/ML is exciting! Start with Python, then dive into libraries like scikit-learn, TensorFlow, or PyTorch.";
  }

  // Career advice
  if (input.includes("career") || input.includes("job") || input.includes("placement")) {
    return "Build projects, improve your DSA, contribute to open source, and practice coding interviews.";
  }

  // Thank you
  if (input.includes("thank")) {
    return "You're welcome! 😊 Keep coding and stay curious!";
  }

  // Goodbye
  if (input.includes("bye") || input.includes("goodbye")) {
    return "Goodbye! Wishing you success in your CS journey! 👋";
  }

  // Default fallback
  return "I didn't quite get that. Try asking about programming, DSA, web dev, AI, or career advice.";
}
