import { IImplementation } from "../interfaces/implementation.interface";

export class ClientImplementation implements IImplementation {
  constructor() {}

  public implement() {
    console.log(`Implement client...`);
  }
}
