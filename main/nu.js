"use strict";

const toonTijd = () => {
  document.getElementById("nu").textContent = new Date().toLocaleTimeString(
    "nl-BE"
  );
};

document.getElementById("hoeLaat").onclick = toonTijd;
