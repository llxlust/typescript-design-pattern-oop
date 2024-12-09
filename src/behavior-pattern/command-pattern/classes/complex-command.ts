import { ICommand } from "./command.interface";
import { Receiver } from "./receiver";

export class ComplexCommand implements ICommand {
  private receiver: Receiver;
  private a: string;
  private b: string;
  constructor(receiver: Receiver, a: string, b: string) {
    this.a = a;
    this.b = b;
    this.receiver = receiver;
  }
  execute(): void {
    console.log(
      "ComplexCommand: Complex stuff should be done by a receiver object."
    );
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}
