import { IBuilder } from "../interfaces/builder.interface";
import { Car } from "./car";

export class CarBuilder implements IBuilder {
  car: Car;
  constructor() {
    this.car = new Car();
  }
  reset() {
    this.car = new Car();
  }
  setSpeed(spd: number) {
    this.car.setSpeed(spd);
    return this;
  }

  setAccelerate(acc: number) {
    this.car.setAccelerate(acc);
    return this;
  }

  setHandling(hld: number) {
    this.car.setHandling(hld);
    return this;
  }

  setWheeling(wh: number) {
    this.car.setWhelling(wh);
    return this;
  }
  setEngine(en: string) {
    this.car.setEngine(en);
    return this;
  }
  getResult() {
    return this.car;
  }
}
