"use strict";

const voornaam = sessionStorage.getItem("voornaam");
if (voornaam !== null) {
  document.getElementById("voornaam").textContent = voornaam;
}
