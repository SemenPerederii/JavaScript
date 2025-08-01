"use strict";

const nameInput = document.getElementById("name");
const hoogteInput = document.getElementById("hoogte");
const btn = document.getElementById("btn");

let max = 0;

btn.onclick = () => {
  if (nameInput.checkValidity() && hoogteInput.checkValidity()) {
    document.getElementById("fout").hidden = true;
    tableToevoegen(nameInput, hoogteInput);
    toonSterretjes();
    nieuweInvoer(nameInput, hoogteInput);
  } else {
    document.getElementById("fout").hidden = false;
  }
};

function tableToevoegen(nameInput, hoogteInput) {
  const tr = document.getElementById("tbody").insertRow();
  tr.insertCell().textContent = nameInput.value;
  const hoogte = Number(hoogteInput.value);
  tr.insertCell().textContent = hoogte;
  if (hoogte > max) {
    max = hoogte;
  }
  tr.insertCell();
}

function toonSterretjes() {
  for (const tr of document.getElementById("tbody").rows) {
    const hoogte = Number(tr.cells[1].textContent);
    tr.cells[2].textContent = hoogte === max ? "*" : "";
  }
}

function nieuweInvoer(nameInput, hoogteInput) {
  nameInput.value = "";
  hoogteInput.value = "";
  nameInput.focus();
}
