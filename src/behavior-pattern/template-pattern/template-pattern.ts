import { ConcreateClass1 } from "./classes/ConcreteClass1";

export class TemplatePattern {
  constructor() {
    this.main();
  }
  private main() {
    const concreateClass1 = new ConcreateClass1();
    concreateClass1.templateMethod();
  }
}
