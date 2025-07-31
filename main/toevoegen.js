"use strict";

document.getElementById("toevoegen").onclick = async () => {
  const user = {
    name: document.getElementById("naam").value,
    email: document.getElementById("email").value,
  };
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user),
  });
  const foutDiv = document.getElementById("fout");
  if (response.ok) {
    foutDiv.hidden = true;
    const data = await response.json();
    document.getElementById("nummer").textContent = data.id;
    document.getElementById("toegevoegd").hidden = false;
  } else {
    foutDiv.hidden = false;
  }

  let newUser = await fetch("https://jsonplaceholder.typicode.com/users/11");
  newUser = await newUser.json();
  console.log(newUser.id, newUser.name, newUser.email);
};
