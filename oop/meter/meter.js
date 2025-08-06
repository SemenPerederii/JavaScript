"use strict";

class Meter {
  #afstand;

  constructor(afstand) {
    this.#afstand = afstand;
  }

  getInches() {
    return this.#afstand * 39.37;
  }

  getYards() {
    return this.#afstand * 1.0936;
  }
}

const afstand = new Meter(25);
console.log(afstand.getYards());
