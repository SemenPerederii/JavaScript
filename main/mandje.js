"use strict";

const mandjeUl = document.getElementById("mandje");
const aantal = document.getElementById("aantal");
let mandje = JSON.parse(localStorage.getItem("mandje"));

if (mandje === null) {
  mandje = [];
} else {
  for (const burger of mandje) {
    const li = document.createElement("li");
    li.textContent = burger;
    mandjeUl.append(li);
  }
  aantal.textContent = mandje.length;
}

for (const a of document.querySelectorAll("a")) {
  a.onclick = (event) => {
    const burger = a.textContent;
    const li = document.createElement("li");
    li.textContent = event.target.textContent;
    mandje.push(burger);
    localStorage.setItem("mandje", JSON.stringify(mandje));
    mandjeUl.append(li);
    let aantalMandje = Number(aantal.textContent) + 1;
    aantal.textContent = aantalMandje;
  };
}
