import { ICommand } from "./command.interface";

export class Invoker {
  private onStart!: ICommand;
  private onFinish!: ICommand;

  public setOnStart(onStart: ICommand) {
    this.onStart = onStart;
  }

  public setOnFinish(onFinish: ICommand) {
    this.onFinish = onFinish;
  }

  public execute() {
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: ICommand): object is ICommand {
    return object.execute !== undefined;
  }
}
