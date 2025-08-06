"use strict";

class Vierkant {
  #zijde;

  constructor(zijde) {
    this.#zijde = zijde;
  }

  getOmtrek() {
    return this.#zijde * 4;
  }

  getOppervlakte() {
    return this.#zijde * this.#zijde;
  }
}

const vierkanten = [new Vierkant(4), new Vierkant(8)];
for (const vierkant of vierkanten) {
  console.log(
    "Omtrek:" + vierkant.getOmtrek(),
    "Oppervlakte:" + vierkant.getOppervlakte()
  );
}
