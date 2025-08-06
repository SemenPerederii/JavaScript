"use strict";

class Tegel {
  #prijs;

  constructor(prijs) {
    this.#prijs = prijs;
  }

  getPrijs() {
    return this.#prijs;
  }
}

class VierkanteTegel extends VierkanteTegel {
  #zijde;

  constructor(prijs, zijde) {
    super(prijs);
    this.#zijde = zijde;
  }

  getOppervlakte() {
    return Number((this.#zijde * this.#zijde).toFixed(2));
  }
}

class RechthoekigeTegel extends Tegel {
  #lengte;
  #breedte;

  constructor(prijs, lengte, breedte) {
    super(prijs);
    this.#lengte = lengte;
    this.#breedte = breedte;
  }

  getOppervlakte() {
    return Number((this.#lengte * this.#breedte).toFixed(2));
  }
}

class RondeTegel {
  #straal;

  constructor(prijs, straal) {
    super(prijs);
    this.#straal = straal;
  }

  getOppervlakte() {
    return Number((this.#straal * this.#straal * Math.PI).toFixed(2));
  }
}

class BestelRegel {
  #aantal;
  #tegel;

  constructor(tegel, aantal) {
    this.#tegel = tegel;
    this.#aantal = aantal;
  }
}
