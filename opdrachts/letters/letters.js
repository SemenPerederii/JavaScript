"use strict";

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.onclick = async () => {
  if (input.checkValidity()) {
    list.innerHTML = "";
    document.getElementById("foutInput").hidden = true;
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersArray = await userVerwerk(
      response,
      document.getElementById("fout")
    );
    for (const user of usersArray) {
      if (user.name.toLowerCase().includes(input.value.toLowerCase())) {
        createList(user);
      }
    }
  } else {
    document.getElementById("foutInput").hidden = false;
  }
};

async function userVerwerk(response, fout) {
  if (response.ok) {
    const users = await response.json();
    return users;
  } else {
    fout.hidden = false;
    return;
  }
}

function createList(user) {
  const link = document.createElement("a");
  link.href = "detail.html";
  link.textContent = user.name;
  const li = document.createElement("li");
  li.append(link);
  list.append(li);

  link.onclick = (event) => {
    setToSession();
  };

  function setToSession() {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
}
