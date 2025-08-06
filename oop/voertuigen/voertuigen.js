"use strict";

class Voertuig {
  #maxPersonen;

  constructor(maxPersonen) {
    this.#maxPersonen = maxPersonen;
  }

  info() {
    return `Info: ${this.#maxPersonen}`;
  }
}

class LandVoertuig extends Voertuig {
  #wielen;

  constructor(maxPersonen, wielen) {
    super(maxPersonen);
    this.#wielen = wielen;
  }

  info() {
    return `${super.info()}, ${this.#wielen}`;
  }
}

class Fiets extends LandVoertuig {
  #versnellingen;

  constructor(maxPersonen, wielen, versnellingen) {
    super(maxPersonen, wielen);
    this.#versnellingen = versnellingen;
  }

  info() {
    return `${super.info()}, ${this.#versnellingen}`;
  }
}

const fiets = new Fiets(2, 2, 34);
console.log(fiets.info());
