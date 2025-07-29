"use strict";

const btn = document.getElementById("btn");

btn.onclick = () => {
  document.getElementById("result").textContent =
    document.getElementById("getal1").value /
    document.getElementById("getal2").value;

  if (!document.getElementById("getal1").checkValidity()) {
    document.getElementById("result").textContent = "Getal 1 is niet correct!";
  }

  if (!document.getElementById("getal2").checkValidity()) {
    document.getElementById("result").textContent = "Getal 2 is niet correct!";
  }
};
