"use strict";

const links = document.querySelectorAll("a");

for (const link of links) {
  link.onclick = () => {
    document.getElementById("fruit-label").hidden = false;
    document.getElementById("fruit").textContent = link.textContent;
    document.getElementById("oorsprong-label").hidden = false;
    document.getElementById("oorsprong").textContent = link.dataset.oorsprong;
    document.getElementById("koolhydraten-label").hidden = false;
    document.getElementById("koolhydraten").textContent =
      link.dataset.koolhydraten;
  };
}
