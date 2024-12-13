import { ConcreateStateA } from "./classes/concreate-state-a";
import { Context } from "./classes/context";

export class StatePattern {
  constructor() {
    this.main();
  }
  private main() {
    const context = new Context(new ConcreateStateA());
    context.request1();
    context.request1();
    context.request2();
    context.request2();
  }
}
