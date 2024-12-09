import { AbstractHandler } from "./abstract-handler";

export class MonkeyHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "banana") {
      return `Monkey: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}
