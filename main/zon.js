const img = document.getElementById("zon");
if (new Date().getHours() < 12) {
  img.src = "morgen.svg";
} else {
  img.src = "middag.svg";
}
