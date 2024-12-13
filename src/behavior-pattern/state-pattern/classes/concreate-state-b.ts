import { ConcreateStateA } from "./concreate-state-a";
import { State } from "./state";

export class ConcreateStateB extends State {
  public request1(): void {
    console.log("ConcreteStateB handles request1.");
  }

  public request2(): void {
    console.log("ConcreteStateB handles request2.");
    console.log("ConcreteStateB wants to change the state of the context.");
    this.context.transitionTo(new ConcreateStateA());
  }
}
