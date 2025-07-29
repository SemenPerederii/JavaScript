"use strict";

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const text = document.getElementById("text");
const img = document.getElementById("img");
const reset = document.getElementById("btnrs");
const letters = document.getElementById("letters");

const sausen = [
  "секс",
  "траx",
  "перепих",
  "жарить",
  "заниматься",
  "вставить",
  "кончить",
  "возбудить",
  "поласкать",
  "ощущения",
  "позы",
  "глубина",
  "оргазм",
  "приливы",
  "эрогенные",
  "груди",
  "ягодицы",
  "влажность",
  "трение",
  "насадка",
  "смазка",
  "стоны",
  "фетиш",
  "фантазия",
  "интим",
];
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
    text.textContent = `Ты угадал слово ${saus}`;
    text.style.color = "green";
    btn.hidden = true;
    reset.hidden = false;
    input.disabled = true;
  }

  if (fouten >= 10) {
    text.textContent = `Ты проиграл, слово было ${saus}`;
    text.style.color = "red";
    btn.hidden = true;
    reset.hidden = false;
  }

  letters.textContent += guess + " ";

  input.focus();
}
