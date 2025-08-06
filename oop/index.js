"use strict";

class GoedDoel {
  #adres;
  #opbrengst;
  #naam;
  #contactpersonen = [];

  constructor(naam, adres) {
    this.#opbrengst = 0;
    this.#naam = naam;
    this.#adres = adres;
  }

  getAdres() {
    return this.#adres;
  }

  voegContactpersonen(persoon) {
    this.#contactpersonen.push(persoon);
  }

  getContactpersonen() {
    return this.#contactpersonen;
  }
}

class Adres {
  #straat;
  #huisnummer;
  #postcode;
  #woonplaats;

  constructor(straat, huisnummer, postcode, woonplaats) {
    this.#straat = straat;
    this.#huisnummer = huisnummer;
    this.#postcode = postcode;
    this.#woonplaats = woonplaats;
  }
  getInfo() {
    return `${this.#straat} ${this.#huisnummer} ${this.#postcode} ${
      this.#woonplaats
    }`;
  }
}

const clinicClowns = new GoedDoel(
  "Cliniclowns",
  new Adres("Prins Bouwesd", "141", 7600, "Wilrijk")
);

class Persoon {
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

clinicClowns.voegContactpersonen(new Persoon("Arthur", "Janssens"));
clinicClowns.voegContactpersonen(new Persoon("Emma", "Peeters"));
for (const persoon of clinicClowns.getContactpersonen()) {
  console.log(persoon.getNaam());
}
