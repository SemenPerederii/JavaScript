"use strict";

const groenten = document.getElementById("groenten");
groenten.onchange = (event) => {
  event.target.remove(event.target.selectedIndex);
};
