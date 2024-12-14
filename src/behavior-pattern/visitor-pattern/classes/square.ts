import { IShape } from "./shape.interface";
import { IVisitor } from "./visitor.interface";

export class Square implements IShape {
  private width = 10;
  private height = 10;
  accept(visitor: IVisitor): void {
    visitor.implementSquare(this);
  }

  public getWidth() {
    return this.width;
  }

  public getHeight() {
    return this.height;
  }
}
