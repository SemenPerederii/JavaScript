"use strict";

document.getElementById("aantalBurgers").textContent =
  document.getElementById("burgers").length;

document.getElementById("aantalFrieten").textContent =
  document.querySelectorAll("[name='friet']").length;

document.getElementById("burgers").onchange = (event) =>
  (document.getElementById("keuzeBurger").textContent = event.target.value);

const divDesserts = document.getElementById("keuzeDesserts");
for (const checkBoxDessert of document.querySelectorAll("[name='dessert']")) {
  checkBoxDessert.onchange = () =>
    (divDesserts.textContent = checkBoxDessert.checked
      ? divDesserts.textContent + checkBoxDessert.value + " "
      : divDesserts.textContent.replace(checkBoxDessert.value, ""));
}
