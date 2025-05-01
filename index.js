const dotArea = document.getElementById("dotArea");

function createDot(sizeClass, top, left, delay) {
  const dot = document.createElement("div");
  dot.classList.add("dot", sizeClass);
  dot.style.width = sizeClass === "big" ? "20px" : "10px";
  dot.style.height = dot.style.width;
  dot.style.top = top + "px";
  dot.style.left = left + "px";
  dot.style.animationDelay = delay + "s";
  dotArea.appendChild(dot);
}

function generateDots() {
  // Big center dots
  for (let i = 0; i < 7; i++) {
    const top = 90 + Math.random() * 60;
    const left = 70 + Math.random() * 100;
    const delay = Math.random(); // between 0s - 1s
    createDot("big", top, left, delay);
  }

  // Small outer dots
  for (let i = 0; i < 12; i++) {
    const top = Math.random() * 260;
    const left = Math.random() * 260;
    const delay = Math.random(); // between 0s - 1s
    createDot("small", top, left, delay);
  }
}

generateDots();
