import { ComplexCommand } from "./classes/complex-command";
import { Invoker } from "./classes/invoker";
import { Receiver } from "./classes/receiver";
import { SimpleCommand } from "./classes/simple-command";

export class CommandPattern {
  constructor() {
    this.main();
  }
  private main() {
    const invoker = new Invoker();
    invoker.setOnStart(new SimpleCommand("Create connection"));
    invoker.setOnFinish(
      new ComplexCommand(
        new Receiver(),
        "Pooling connection",
        "Destroy connection"
      )
    );
    invoker.execute();
  }
}
