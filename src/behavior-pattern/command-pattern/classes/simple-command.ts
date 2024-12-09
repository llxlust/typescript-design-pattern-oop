import { ICommand } from "./command.interface";

export class SimpleCommand implements ICommand {
  payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }
  execute(): void {
    console.log(
      `Single command currently executing {${this.payload}} command.`
    );
  }
}
