import { CarBuilder } from "./classes/car-builder";
import { Director } from "./classes/director";

export class Builder {
  constructor() {
    this.main();
  }
  public main() {
    const carBuilder = new CarBuilder();
    const carDirector = new Director(carBuilder);
    const normalCar = carDirector.createNormalCar();
    console.log(`This is normal car top speed : ${normalCar.getSpeed()}`);
    const sportCar = carDirector.createSportCar();
    console.log(`This is sport car top speed : ${sportCar.getSpeed()}`);
    const superCar = carDirector.createSuperCar();
    console.log(`This is super car top speed : ${superCar.getSpeed()}`);
  }
}
