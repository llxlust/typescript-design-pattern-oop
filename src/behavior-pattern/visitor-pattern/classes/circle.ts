import { IShape } from "./shape.interface";
import { IVisitor } from "./visitor.interface";

export class Circle implements IShape {
  private radius = 5;
  accept(visitor: IVisitor): void {
    visitor.implementCircle(this);
  }

  getRadius(): number {
    return this.radius;
  }
}
