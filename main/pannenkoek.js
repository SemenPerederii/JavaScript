"use sctrict";

for (const eenClass of document.getElementById("beschrijving").classList) {
  console.log(eenClass);
}

for (const li of document.querySelectorAll("li")) {
  li.onclick = () => li.classList.toggle("opvallend");
}
