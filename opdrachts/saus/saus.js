"use strict";

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const text = document.getElementById("text");
const img = document.getElementById("img");
const reset = document.getElementById("btnrs");
const letters = document.getElementById("letters");

const sausen = ["cocktail", "mayonaise", "mosterd", "tartare", "vinaigrette"];
const saus = sausen[Math.floor(Math.random() * sausen.length)];

const main = [];
for (let i = 0; i < saus.length; i++) {
  main[i] = ".";
}

let fouten = 0;

text.textContent = main.join("");

btn.onclick = woordRaden;
reset.onclick = () => {
  location.reload();
};

function kiezenSaus() {}

function woordRaden() {
  const guess = input.value.toLowerCase();
  input.value = "";
  if (!guess || guess.length !== 1) {
    alert("Voer een letter in!");
    return;
  }

  let found = false;

  for (let i = 0; i < saus.length; i++) {
    if (guess === saus[i] && main[i] === ".") {
      main[i] = guess;
      found = true;
    }
  }

  if (!found) {
    fouten++;
    img.src = "beurt" + fouten + ".svg";
  }

  text.textContent = main.join("");

  if (!main.includes(".")) {
    text.textContent = `Je hebt gewonnen, de saus was ${saus}`;
    text.style.color = "green";
    btn.hidden = true;
    reset.hidden = false;
    input.disabled = true;
  }

  if (fouten >= 10) {
    text.textContent = `Je hebt verloren, de saus was ${saus}`;
    text.style.color = "red";
    btn.hidden = true;
    reset.hidden = false;
  }

  letters.textContent += guess + " ";
}
