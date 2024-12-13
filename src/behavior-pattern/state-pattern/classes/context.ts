import { State } from "./state";

export class Context {
  private state!: State;
  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State) {
    this.state = state;
    this.state.setContext(this);
  }

  public request1(): void {
    this.state.request1();
  }

  public request2(): void {
    this.state.request2();
  }
}
