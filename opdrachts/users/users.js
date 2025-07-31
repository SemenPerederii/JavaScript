"use strict";

const names = document.getElementById("naamen");

const response = await fetch("https://jsonplaceholder.typicode.com/users");

if (response.ok) {
  const users = await response.json();
  for (const user of users) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = user.name;
    const li = document.createElement("li");
    li.append(link);
    names.append(li);

    link.onclick = () => {
      document.getElementById("nummer").textContent = user.id;
      document.getElementById("naam").textContent = user.name;
      document.getElementById("email").textContent = user.email;
    };
  }
} else {
  document.getElementById("fout").hidden = false;
}
