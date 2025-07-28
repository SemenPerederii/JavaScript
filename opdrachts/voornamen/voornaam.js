"use strict";

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const list = document.getElementById("list");

const aantalVoornamen = {};

btn.onclick = () => {
  const name = capitalizeWord(input.value.trim());
  if (name === "") return;

  if (aantalVoornamen[name]) {
    aantalVoornamen[name]++;
    const span = document.getElementById(name);
    span.textContent = aantalVoornamen[name];
  } else {
    aantalVoornamen[name] = 1;

    const li = document.createElement("li");
    li.textContent = name + ": ";

    const span = document.createElement("span");
    span.setAttribute("id", name);
    span.textContent = aantalVoornamen[name];

    li.appendChild(span);
    list.appendChild(li);
  }
  input.value = "";
  input.focus();
};

function capitalizeWord(name) {
  if (!name) return "";
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
