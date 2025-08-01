"use strict";

const response = await getResponse();
const users = await response.json();

tabelInvullen(users);

const links = document.querySelectorAll("a");
for (const link of links) {
  link.addEventListener("click", filter);
}

async function getResponse() {
  const response = await fetch("geslachten.json");
  if (response.ok) {
    document.getElementById("fout").hidden = true;
  } else {
    for (const link of document.querySelectorAll("a")) {
      link.hidden = true;
    }
    document.querySelector(".list").hidden = true;
    document.getElementById("fout").hidden = false;
  }
  return response;
}

function tabelInvullen(usersArray) {
  for (const user of usersArray) {
    const tr = document.getElementById("tbody").insertRow();
    tr.insertCell().textContent = user.voornaam;
    tr.insertCell().textContent = user.familienaam;
    if (user.geslacht === "man") {
      tr.insertCell().textContent = "♂️";
    } else if (user.geslacht === "vrouw") {
      tr.insertCell().textContent = "♀️";
    } else {
      tr.insertCell().textContent = "x";
    }
    const img = document.createElement("img");
    img.src = user.foto;
    tr.insertCell().append(img);
  }
}

function filter(event) {
  for (const tr of document.getElementById("tbody").rows) {
    tr.hidden = false;
    if (event.target.dataset.geslacht === "mannen") {
      if (tr.cells[2].textContent !== "♂️") {
        tr.hidden = true;
      }
    } else if (event.target.dataset.geslacht === "vrouwen") {
      if (tr.cells[2].textContent !== "♀️") {
        tr.hidden = true;
      }
    } else if (event.target.dataset.geslacht === "x") {
      if (tr.cells[2].textContent !== "x") {
        tr.hidden = true;
      }
    }
  }
}
