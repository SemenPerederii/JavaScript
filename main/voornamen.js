"use sctrict";

document.getElementById("toevoegen").onclick = () => {
  const li = document.createElement("li");
  li.textContent = document.getElementById("voornaam").value;
  document.getElementById("voornamen").append(li);
  document.getElementById("voornaam").value = "";
  document.getElementById("voornaam").focus();
};
