"use sctrict";

document.getElementById("burgers").onchange = (event) => {
  document.getElementById("nummer").textContent = event.target.value;

  const gekozenBurger = event.target.options[event.target.selectedIndex];
  document.getElementById("naam").textContent = gekozenBurger.textContent;
  document.getElementById("prijs").textContent = event.target.dataset.prijs;
};
