"use strict";

if (new Date().getHours() < 12) {
  console.log("Goede morgen.");
} else if (new Date().getHours() < 18) {
  console.log("Goede middag.");
}
