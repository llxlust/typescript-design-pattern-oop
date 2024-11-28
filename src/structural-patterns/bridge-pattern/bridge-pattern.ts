import { AbstractBridge } from "./classses/abstract-bridge";
import { ClientConcreate } from "./classses/client-concreate";
import { ClientImplementation } from "./classses/client-implementation";
import { NetworkConCreate } from "./classses/network-concreate";
import { NetworkImplementation } from "./classses/network-implementation";

export class BridgePattern {
  constructor() {
    this.main();
  }
  private main() {
    const networkImplement = new NetworkImplementation();
    const networkConCreate: AbstractBridge = new NetworkConCreate(
      networkImplement
    );

    const clientImplement = new ClientImplementation();
    const clientConCreate: AbstractBridge = new ClientConcreate(
      clientImplement
    );

    const concreateArray: ReadonlyArray<AbstractBridge> = [
      clientConCreate,
      networkConCreate,
    ];

    concreateArray.forEach((concreate: AbstractBridge) => {
      concreate.implementation();
    });
  }
}
