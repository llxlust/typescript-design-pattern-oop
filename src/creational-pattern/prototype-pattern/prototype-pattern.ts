import { PrototypeObject } from "./classes/prototype-object";

export class Prototype {
  constructor() {
    this.main();
  }

  private main(): void {
    const p1 = new PrototypeObject();
    p1.primitive = 254;
    const p2 = p1.clone();
    if ((p2.primitive = p1.primitive)) {
      console.log(`Fuiyo you copy this already clone object`);
    } else {
      console.log(`Haiya disappointed`);
    }
  }
}
