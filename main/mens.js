"use strict";
document.getElementById("bewaar").onclick = () => {
  for (const melding of document.querySelectorAll(".fout")) {
    melding.hidden = true;
  }
  const voornaam = document.getElementById("voornaam").value;
  if (voornaam === "") {
    document.getElementById("voornaamFout").hidden = false;
  }
  const kinderen = document.getElementById("kinderen").value;
  if (kinderen === "" || isNaN(kinderen) || kinderen < 0) {
    document.getElementById("kinderenFout").hidden = false;
  }
  const geslacht = document.getElementById("geslacht").value;
  if (geslacht === "") {
    document.getElementById("geslachtFout").hidden = false;
  }
  const aantalFouten = document.querySelectorAll(".fout:not([hidden])").length;
  document.getElementById("bewaard").hidden = aantalFouten !== 0;

  if (aantalFouten === 0) {
    const mens = {
      voornaam: document.getElementById("voornaam").value,
      kinderen: Number(document.getElementById("kinderen").value),
      geslacht: document.getElementById("geslacht").value,
    };
    const inJson = JSON.stringify(mens);
  }
};

const mensInJson = localStorage.getItem("mens");
if (mensInJson !== null) {
  const mens = JSON.parse(mensInJson);
  document.getElementById("voornaam").value = mens.voornaam;
  document.getElementById("kinderen").value = mens.kinderen;
  document.getElementById("geslacht").value = mens.geslacht;
}
