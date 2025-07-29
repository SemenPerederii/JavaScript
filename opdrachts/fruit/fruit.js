"use sctrict";

const btnNaarRechts = document.getElementById("eenNaarRechts");
const btnAllesNaarRechts = document.getElementById("allesNaarRechts");
const btnNaarLinks = document.getElementById("eenNaarLinks");
const btnAllesNaarLinks = document.getElementById("allesNaarLinks");

const linksSelect = document.getElementById("links");
const rechtSelect = document.getElementById("rechts");

btnAllesNaarLinks.disabled = true;

linksSelect.onchange = () => (btnNaarRechts.disabled = false);
rechtSelect.onchange = () => (btnNaarLinks.disabled = false);

btnNaarRechts.onclick = () => {
  verplaatsEenFruit(linksSelect, rechtSelect);
  btnNaarRechts.disabled = true;
  btnAllesNaarLinks.disabled = false;
  if (linksSelect.length === 0) {
    btnAllesNaarRechts.disabled = true;
  }
};

btnNaarLinks.onclick = () => {
  verplaatsEenFruit(rechtSelect, linksSelect);
  btnNaarLinks.disabled = true;
  if (rechtSelect.length === 0) {
    btnAllesNaarLinks.disabled = true;
  }
};

btnAllesNaarRechts.onclick = () => {
  verplaatsAlleFruit(linksSelect, rechtSelect);
  btnAllesNaarRechts.disabled = true;
  btnNaarRechts.disabled = true;
  btnAllesNaarLinks.disabled = false;
};

btnAllesNaarLinks.onclick = () => {
  verplaatsAlleFruit(rechtSelect, linksSelect);
  btnAllesNaarLinks.disabled = true;
  btnAllesNaarRechts.disabled = false;
  btnNaarLinks.disabled = true;
};

function verplaatsEenFruit(vanSelect, naarSelect) {
  const option = document.createElement("option");
  option.textContent = vanSelect.value;
  naarSelect.append(option);
  vanSelect.remove(vanSelect.selectedIndex);
}

function verplaatsAlleFruit(vanSelect, naarSelect) {
  for (const vanOption of vanSelect.options) {
    const naarOption = document.createElement("option");
    naarOption.textContent = vanOption.textContent;
    naarSelect.append(naarOption);
  }
  vanSelect.options.length = 0;
}
