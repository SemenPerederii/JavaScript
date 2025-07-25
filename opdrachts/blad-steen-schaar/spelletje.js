"use strict";

const winnar = document.getElementById("winnar");

for (const img of document.querySelectorAll(".images")) {
  img.onclick = () => {
    const keuze = Number(img.dataset.keuze);
    const computerKeuze = Math.floor(Math.random() * 3 + 1);

    document.getElementById("computer").src = `${computerKeuze}.svg`;

    if (keuze === computerKeuze) {
      winnar.textContent = "Niemand";
      winnar.style.color = "#0051d4ff";
    } else if (
      (keuze === 1 && computerKeuze === 2) ||
      (keuze === 2 && computerKeuze === 3) ||
      (keuze === 3 && computerKeuze === 1)
    ) {
      winnar.style.color = "#58ff3bff";
      winnar.textContent = "Jij";
    } else if (
      (keuze === 2 && computerKeuze === 1) ||
      (keuze === 3 && computerKeuze === 2) ||
      (keuze === 1 && computerKeuze === 3)
    ) {
      winnar.textContent = "Computer";
      winnar.style.color = "#ff0000";
    }
  };
}
