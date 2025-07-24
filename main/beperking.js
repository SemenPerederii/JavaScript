"use strict";

document.getElementById("toonDatum").onclick = () =>
  (document.getElementById("resultaat").textContent =
    new Date().toLocaleDateString("nl-BE"));

document.getElementById("toonTijd").onclick = () =>
  (document.getElementById("resultaat").textContent =
    new Date().toLocaleTimeString("nl-BE"));
