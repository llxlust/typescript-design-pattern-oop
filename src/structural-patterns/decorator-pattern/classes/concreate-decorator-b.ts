import { Decorator } from "./decorator";

export class ConcreateDecoratorB extends Decorator {
  operation(): string {
    return `ConcreateDecoratorB(${super.operation()})`;
  }
}
