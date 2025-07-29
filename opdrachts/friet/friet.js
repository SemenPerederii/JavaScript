"use strict";

const reset = document.getElementById("btn");
const deuren = document.querySelectorAll("img");

getRandom();
let beurten = 0;

for (const deur of deuren) {
  deur.onclick = (event) => {
    beurten++;
    if (event.target.dataset.deur === "gevonden") {
      event.target.src = "gevonden.png";
      document.getElementById(
        "span"
      ).textContent = `Ты нашёл(а) скайчика с ${beurten} попытки`;
      beurten = 0;
      reset.hidden = false;
    } else {
      event.target.src = "deuropen.svg";
    }
  };
}

reset.onclick = () => {
  location.reload();
};

function getRandom() {
  let random = Math.floor(Math.random() * 7 + 1);
  let idCount = 1;
  for (const deur of deuren) {
    deur.id = idCount;
    idCount++;
  }
  document.getElementById(random).dataset.deur = "gevonden";
}
