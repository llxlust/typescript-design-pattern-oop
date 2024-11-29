import { Decorator } from "./decorator";

export class ConcreateDecoratorA extends Decorator {
  operation(): string {
    return `ConcreateDecoratorA(${super.operation()})`;
  }
}
