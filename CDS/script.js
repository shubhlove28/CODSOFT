function alertTip() {
  const tips = [
    "Solve 30 MCQs daily for Maths.",
    "Use Lucent GK to revise core facts every day.",
    "Read The Hindu for 30 mins each morning.",
    "Simulate full-length papers every Sunday.",
    "Make flashcards for difficult English words.",
    "Practice comprehension daily—1 passage minimum.",
    "Analyze every mock test you take—track errors."
  ];

  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("random-tip").innerText = "💬 Tip: " + tip;
}
