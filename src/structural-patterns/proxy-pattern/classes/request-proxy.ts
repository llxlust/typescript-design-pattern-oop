import { RequestHandler } from "./request-handler";

export class RequestProxy {
  handler: RequestHandler;
  private access: boolean = false;
  constructor(handler: RequestHandler) {
    this.handler = handler;
  }

  public operate() {
    if (this.checkAccess()) {
      this.handler.execute();
      return;
    }
    console.log(`Access Denined.`);
  }

  private checkAccess(): boolean {
    return this.access;
  }

  public grantAccess(): void {
    this.access = true;
  }
}
