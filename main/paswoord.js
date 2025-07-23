"use strict";

document.getElementById("paswoord").oninput = () => {
  const password = document.getElementById("paswoord").value;
  const feedbackSpan = document.getElementById("feedback");
  if (password.length >= 6) {
    feedbackSpan.textContent = "OK";
  } else {
    feedbackSpan.textContent = "Te kort";
  }
};
