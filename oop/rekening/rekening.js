"use strict";

class Rekening {
  #saldo = 0;

  stort(bedrag) {
    if (bedrag > 0) {
      this.#saldo += bedrag;
    }
  }

  haalAf(bedrag) {
    if (bedrag > 0) {
      this.#saldo -= bedrag;
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const reken = new Rekening();

reken.stort(200);
reken.haalAf(50);
console.log(reken.getSaldo());
