import { RequestHandler } from "./classes/request-handler";
import { RequestProxy } from "./classes/request-proxy";

export class ProxyPattern {
  constructor() {
    this.main();
  }
  private main(): void {
    const requestHandler = new RequestHandler("POST");
    const requestProxy: RequestProxy = new RequestProxy(requestHandler);
    //requestProxy.grantAccess();
    requestProxy.operate();
  }
}
