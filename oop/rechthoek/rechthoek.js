"use strict";

class Rechthoek {
  #lengte;
  #breedte;

  constructor(lengte, breedte) {
    this.#lengte = lengte;
    this.#breedte = breedte;
  }

  getOppervlakte() {
    return this.#lengte * this.#breedte;
  }
}

const rechthoek = new Rechthoek(4, 3);
console.log(rechthoek.getOppervlakte());
