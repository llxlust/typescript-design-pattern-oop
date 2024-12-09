import { AbstractHandler } from "./abstract-handler";

export class DeveloperHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "coffee") {
      return `Developer: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}
