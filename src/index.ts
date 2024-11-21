import { AbstractFactory } from "./patterns/abstract-factory/abstract-factory";

class Main {
  constructor() {
    this.main();
  }
  private main(): void {
    const abstractFactory: AbstractFactory = new AbstractFactory("window");
  }
}
const mainInstance: Main = new Main();
