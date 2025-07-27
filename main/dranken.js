"use sctrict";

document.getElementById("klein").onclick = () => {
  for (const img of document.querySelectorAll("img")) {
    img.classList.add("klein");
  }
};

document.getElementById("groot").onclick = () => {
  for (const img of document.querySelectorAll("img")) {
    img.classList.remove("klein");
  }
};
