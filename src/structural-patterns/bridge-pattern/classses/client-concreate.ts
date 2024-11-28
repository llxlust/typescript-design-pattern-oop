import { IImplementation } from "../interfaces/implementation.interface";
import { AbstractBridge } from "./abstract-bridge";

export class ClientConcreate extends AbstractBridge {
  constructor(imp: IImplementation) {
    super(imp);
  }
  implementation(): void {
    this.implementor.implement();
  }
}