"use strict";

class Mens {
  #voornaam;
  #familienaam;

  constructor(voornaam, familienaam) {
    this.#voornaam = voornaam;
    this.#familienaam = familienaam;
  }

  getNaam() {
    return `${this.#voornaam} ${this.#familienaam}`;
  }
}

class Gezin {
  #mama;
  #papa;
  #kinderen = [];

  constructor(mama, papa) {
    this.#mama = mama;
    this.#papa = papa;
  }

  voegKindToe(kind) {
    this.#kinderen.push(kind);
  }

  getMama() {
    return this.#mama;
  }

  getPapa() {
    return this.#papa;
  }

  getKinderen() {
    return this.#kinderen;
  }
}

const gezin = new Gezin(
  new Mens("Oksana", "Lukich"),
  new Mens("Oleg", "Lukich")
);

gezin.voegKindToe(new Mens("Kristina", "Lukich"));
gezin.voegKindToe(new Mens("Sam", "Lukich"));

console.log(gezin.getMama().getNaam(), gezin.getPapa().getNaam());
for (const kind of gezin.getKinderen()) {
  console.log(kind.getNaam());
}
