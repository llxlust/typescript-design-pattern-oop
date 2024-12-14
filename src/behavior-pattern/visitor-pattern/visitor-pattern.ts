import { AreaVisitor } from "./classes/area-visitor";
import { Circle } from "./classes/circle";
import { Square } from "./classes/square";

export class VisitorPattern {
  constructor() {
    this.main();
  }
  private main() {
    const circle = new Circle();
    const square = new Square();
    const areaVisitor = new AreaVisitor();
    circle.accept(areaVisitor);
    square.accept(areaVisitor);
  }
}
