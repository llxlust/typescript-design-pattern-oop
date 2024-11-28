import { Composite } from "./classes/composite";
import { Leaf } from "./classes/leaf";

export class CompositePattern {
  constructor() {
    this.main();
  }
  private main(): void {
    const branch1 = new Composite();
    branch1.add(new Leaf());
    branch1.add(new Leaf());
    const result: string = branch1.operation();
    console.log(result);
  }
}
