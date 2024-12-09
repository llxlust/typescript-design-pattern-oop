import { IHandler } from "./handler.interface";

export abstract class AbstractHandler implements IHandler {
  private nextHandler!: IHandler;

  public setNext(handler: IHandler<string, string>): IHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}
