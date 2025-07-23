"use sctrict";

document.getElementById("herhaal").onblur = (event) => {
  document.getElementById("feedback").textContent =
    event.target.value === document.getElementById("paswoord").value
      ? "OK"
      : "Verschilt";
};
