import { AbstractHandler } from "./abstract-handler";

export class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "nut") {
      return `Squirrel: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}
