"use strict";

document.getElementById("zoeken").onclick = async () => {
  const nummerInput = document.getElementById("zoekNummer");
  const nummerFout = document.getElementById("nummerFout");
  if (nummerInput.checkValidity()) {
    nummerFout.hidden = true;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${nummerInput.value}`
    );
    const nietGevondenDiv = document.getElementById("nietGevonden");
    if (response.ok) {
      nietGevondenDiv.hidden = true;
      const user = await response.json();
      document.getElementById("nummer").textContent = user.id;
      document.getElementById("naam").textContent = user.name;
      document.getElementById("email").textContent = user.email;
    } else {
      nietGevondenDiv.hidden = false;
    }
  }
};
