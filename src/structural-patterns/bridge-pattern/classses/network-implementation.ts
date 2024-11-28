import { IImplementation } from "../interfaces/implementation.interface";

export class NetworkImplementation implements IImplementation {
  constructor() {}
  public implement() {
    console.log(`Implementing network...`);
  }
}
