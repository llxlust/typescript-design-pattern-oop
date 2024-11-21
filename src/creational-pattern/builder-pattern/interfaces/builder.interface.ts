import { Car } from "../classes/car";

export interface IBuilder {
  reset: () => void;
  setSpeed: (spd: number) => this;
  setHandling: (hld: number) => this;
  setAccelerate: (acc: number) => this;
  setEngine: (en: string) => this;
  setWheeling: (wh: number) => this;
  getResult: () => Car;
}
