import { SingletonObject } from "./classes/singleton-object";

export class SingletonPattern {
  constructor() {
    this.main();
  }
  private main(): void {
    const instance = SingletonObject.getSingletonObjectInstance();
    instance.username = "Tonkla";
    console.log(instance.username);
  }
}
