"use strict";

document.getElementById("donker").onclick = () => {
  localStorage.setItem("thema", "donker");
  document.body.classList.add("donker");
};

if (localStorage.getItem("thema") === "donker") {
  document.body.classList.add("donker");
}

document.getElementById("licht").onclick = () => {
  localStorage.removeItem("thema");
  document.body.classList.remove("donker");
};
