"use strict";

document.getElementById("toevoegen").onclick = () => {
  const tbody = document.getElementById("namenBody");
  const tr = tbody.insertRow();
  const voornaamTd = tr.insertCell();
  const voornaamInput = document.getElementById("voornaam");
  voornaamTd.textContent = voornaamInput.value;
  const familienaamTd = tr.insertCell();
  const familienaamInput = document.getElementById("familienaam");
  familienaamTd.textContent = familienaamInput.value;
  voornaamInput.value = "";
  familienaamInput.value = "";
  voornaamInput.focus();

  const verwijderLink = document.createElement("a");
  verwijderLink.textContent = "X";
  verwijderLink.href = "#";
  verwijderLink.onclick = () => tr.remove();
  tr.insertCell().append(verwijderLink);
};
