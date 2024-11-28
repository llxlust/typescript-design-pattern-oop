import { IImplementation } from "../interfaces/implementation.interface";

export abstract class AbstractBridge {
  protected implementor: IImplementation;
  constructor(imp: IImplementation) {
    this.implementor = imp;
  }
  implementation(): void {
    this.implementor.implement();
  }
}
