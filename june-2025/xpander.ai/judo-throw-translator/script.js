const throws = [
  {
    english: "Seoi Nage",
    japanese: "背負い投げ",
    description: "A shoulder throw where you turn under your opponent's arm and project them forward.",
  },
  {
    english: "O Soto Gari",
    japanese: "大外刈",
    description: "A major outer reap where you sweep your opponent's leg backward with your own leg.",
  },
  {
    english: "Uchi Mata",
    japanese: "内股",
    description: "An inner thigh throw where you lift and throw your opponent over your leg.",
  },
];

function translateThrow() {
  const input = document.getElementById("inputThrow").value.trim();
  if (!input) return;
  const lowerInput = input.toLowerCase();
  const found = throws.find(
    (t) =>
      t.english.toLowerCase() === lowerInput || t.japanese === input
  );
  const resultDiv = document.getElementById("result");
  if (found) {
    resultDiv.innerHTML = `
      <p><strong>English:</strong> ${found.english}</p>
      <p><strong>Japanese:</strong> ${found.japanese}</p>
      <p><strong>Description:</strong> ${found.description}</p>
    `;
  } else {
    resultDiv.textContent = "Throw not found. Please check your spelling.";
  }
}

document
  .getElementById("translateButton")
  .addEventListener("click", translateThrow);

document
  .getElementById("inputThrow")
  .addEventListener("keypress", (e) => {
    if (e.key === "Enter") translateThrow();
  });