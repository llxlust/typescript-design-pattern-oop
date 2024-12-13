import { ConcreateStateB } from "./concreate-state-b";
import { State } from "./state";

export class ConcreateStateA extends State {
  public request1(): void {
    console.log("ConcreteStateA handles request1.");
    console.log("ConcreteStateA wants to change the state of the context.");
    this.context.transitionTo(new ConcreateStateB());
  }
  public request2(): void {
    console.log("ConcreteStateA handles request2.");
  }
}
