// Typing effect text
const text = "Z3N0 • Discord Manager • JavaScript Coder • Bot development • Moderation";
const typingElement = document.querySelector(".typing-text");
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text[index];
    index++;
    setTimeout(type, 100); // typing speed (ms)
  }
}

// Start typing after page load
window.addEventListener("load", type);
