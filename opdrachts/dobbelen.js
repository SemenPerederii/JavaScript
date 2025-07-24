"use strict";

const btn = document.getElementById("btn");
const score = document.getElementById("score");
const totaal = document.getElementById("totaal");
const steen1 = document.getElementById("steen1");
const steen2 = document.getElementById("steen2");

let totaalScore = 0;

btn.onclick = random;

function random() {
  let eersteSteen = Math.floor(Math.random() * 6 + 1);
  let tweedeSteen = Math.floor(Math.random() * 6 + 1);

  steen1.src = "steen" + eersteSteen + ".svg";
  steen2.src = "steen" + tweedeSteen + ".svg";

  let sum = eersteSteen + tweedeSteen;
  if (eersteSteen === tweedeSteen) {
    score.textContent = sum * 2;
  } else {
    score.textContent = sum;
  }

  totaalScore += sum;

  totaal.textContent = totaalScore;
}
