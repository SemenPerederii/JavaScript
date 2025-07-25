"use strict";

const links = document.querySelectorAll("a");
for (const link of links) {
  link.onclick = () => {
    document.getElementById("foto").src = `${link.textContent}.svg`;
    document.getElementById("prijsOnderdeel").hidden = false;
    document.getElementById("prijs").textContent = link.dataset.prijs;
  };
}
