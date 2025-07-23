"use sctrict";

const input = document.getElementById("input");
const span = document.getElementById("span");

input.onblur = () => {
  let isPolindrom = true;
  for (let i = 0; i < input.value.length / 2; i++) {
    if (input.value[i] !== input.value[input.value.length - i - 1]) {
      isPolindrom = false;
      break;
    }
  }
  span.textContent = isPolindrom ? "palindroom" : "niet palindroom";
};
