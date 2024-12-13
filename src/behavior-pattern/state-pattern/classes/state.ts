import { Context } from "./context";

export abstract class State {
  protected context!: Context;
  setContext(context: Context) {
    this.context = context;
  }

  public abstract request1(): void;
  public abstract request2(): void;
}
