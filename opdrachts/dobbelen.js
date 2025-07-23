"use strict";

const btn = document.getElementById("btn");
const score = document.getElementById("score");
const totaal = document.getElementById("totaal");
const steen1 = document.getElementById("steen1");
const steen2 = document.getElementById("steen2");

btn.onclick = random;

let totaalScore = 0;

function random() {
  let eersteSteen = Math.floor(Math.random() * 6 + 1);
  let tweedeSteen = Math.floor(Math.random() * 6 + 1);

  steen1.src = "steen" + eersteSteen + ".svg";
  steen2.src = "steen" + tweedeSteen + ".svg";

  let sum = eersteSteen + tweedeSteen;
  score.textContent = sum;

  totaalScore += sum;

  totaal.textContent = totaalScore;
}
