"use strict";

class Punt {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }
}

class Lijn {
  #eindpunt1;
  #eindpunt2;

  constructor(eindpunt1, eindpunt2) {
    this.#eindpunt1 = eindpunt1;
    this.#eindpunt2 = eindpunt2;
  }

  isHorizontal() {
    return this.#eindpunt1.getY() === this.#eindpunt2.getY();
  }

  isVertical() {
    return this.#eindpunt1.getX() === this.#eindpunt2.getX();
  }
}

const lijn1 = new Lijn(new Punt(1, 10), new Punt(3, 10));
console.log(lijn1.isHorizontal(), lijn1.isVertical());
