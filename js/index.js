const text = "Daryl Dixon";
const typingSpeed = 100;
let indexIncrease = 0;
let indexDescense = text.length;

function typeEffect() {
  const nameElement = document.getElementById("name");

  if (window.innerWidth < 768) {
    nameElement.innerHTML = text;
    const cursor = document.querySelector(".cursor");
    cursor.classList.add("hidden");
    return;
  }

  if (indexIncrease < text.length) {
    nameElement.innerHTML += text[indexIncrease];
    indexIncrease++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(() => {
      nameElement.innerHTML = text.substring(0, indexDescense);
      indexDescense--;
      if ((nameElement.textContent === "")) {
        indexIncrease = 0;
        indexDescense = text.length
      }
      setTimeout(typeEffect, typingSpeed);
    }, typingSpeed);
  }
}

window.onload = typeEffect;
