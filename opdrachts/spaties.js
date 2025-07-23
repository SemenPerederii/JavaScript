const input = document.getElementById("input");
const btn = document.getElementById("btn");
const span = document.getElementById("span");

btn.onclick = () => {
  let aantalSpaties = 0;
  for (let i = 0; i < input.value.length; i++) {
    if (input.value[i] === " ") {
      aantalSpaties++;
    }
  }
  span.textContent = aantalSpaties;
};
