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
};
