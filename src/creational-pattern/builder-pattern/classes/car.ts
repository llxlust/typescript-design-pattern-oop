export class Car {
  private Speed: number = 0;
  private Handling: number = 0;
  private Accelerate: number = 0;
  private Engine: string = "V4";
  private wheeling: number = 2;

  constructor() {}

  getSpeed(): number {
    return this.Speed;
  }
  setSpeed(spd: number): void {
    this.Speed = spd;
  }

  getHandling(): number {
    return this.Handling;
  }
  setHandling(hdl: number): void {
    this.Handling = hdl;
  }

  getAccelerate(): number {
    return this.Accelerate;
  }
  setAccelerate(acc: number): void {
    this.Accelerate = acc;
  }

  getEngine(): string {
    return this.Engine;
  }
  setEngine(en: string): void {
    this.Engine = en;
  }

  getWheeling(): number {
    return this.wheeling;
  }
  setWhelling(wh: number): void {
    this.wheeling = wh;
  }
}
