"use strict";

document.getElementById("single").onchange = (event) => {
  document.getElementById("naamPartner").hidden = event.target.checked;
  document.getElementById("labelPartner").hidden = event.target.checked;
};
