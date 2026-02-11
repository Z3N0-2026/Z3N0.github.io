const text = "Z3N0 • Discord Manager • JavaScript Coder • Bot development • Moderation";
const typingElement = document.querySelector(".typing-text");

let index = 0;
let typingForward = true;

function typeLoop() {
  if (typingForward) {
    typingElement.textContent += text[index];
    index++;
    if (index === text.length) {
      typingForward = false;
      setTimeout(typeLoop, 1000);
      return;
    }
  } else {
    typingElement.textContent = text.slice(0, index - 1);
    index--;
    if (index === 0) {
      typingForward = true;
      setTimeout(typeLoop, 500);
      return;
    }
  }
  setTimeout(typeLoop, 100);
}

window.addEventListener("load", typeLoop);
