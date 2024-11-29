import { ConcreateComponent } from "./classes/concreate-component";
import { ConcreateDecoratorA } from "./classes/concreate-decorator-a";
import { ConcreateDecoratorB } from "./classes/concreate-decorator-b";

export class DecoratorPattern {
  constructor() {
    this.main();
  }

  private main() {
    const decorator1 = new ConcreateDecoratorA(new ConcreateComponent());
    const decorator2 = new ConcreateDecoratorB(decorator1);
    const client = decorator2.operation();
    console.log(client);
  }
}
