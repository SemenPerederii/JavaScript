"use strict";

const span = document.getElementById("span");
const input = document.getElementById("input");

input.oninput = () => {
  let aantalKlinkers = 0;
  for (let i = 0; i < input.value.length; i++) {
    if (
      input.value[i] === "a" ||
      input.value[i] === "e" ||
      input.value[i] === "i" ||
      input.value[i] === "o" ||
      input.value[i] === "u"
    ) {
      aantalKlinkers++;
    }
  }
  span.textContent = aantalKlinkers;
};
