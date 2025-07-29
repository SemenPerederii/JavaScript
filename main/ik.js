"use strict";

document.getElementById("onthoudMe").onclick = () => {
  sessionStorage.setItem("voornaam", document.getElementById("voornaam").value);
};
