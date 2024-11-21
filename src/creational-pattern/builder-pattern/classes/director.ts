import { IBuilder } from "../interfaces/builder.interface";
import { Car } from "./car";

export class Director {
  builder: IBuilder;
  constructor(bd: IBuilder) {
    this.builder = bd;
  }

  public createNormalCar(): Car {
    const normalCar = this.builder
      .setAccelerate(80)
      .setHandling(50)
      .setSpeed(180)
      .setWheeling(4)
      .setEngine("V6")
      .getResult();
    return normalCar;
  }

  public createSportCar(): Car {
    const sportCar = this.builder
      .setAccelerate(100)
      .setHandling(60)
      .setSpeed(220)
      .setWheeling(4)
      .setEngine("V8")
      .getResult();
    return sportCar;
  }

  public createSuperCar(): Car {
    const superCar = this.builder
      .setAccelerate(120)
      .setHandling(70)
      .setSpeed(290)
      .setWheeling(4)
      .setEngine("V10")
      .getResult();
    return superCar;
  }
}
