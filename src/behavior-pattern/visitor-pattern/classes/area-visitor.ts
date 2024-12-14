import { Circle } from "./circle";
import { IShape } from "./shape.interface";
import { Square } from "./square";
import { IVisitor } from "./visitor.interface";

export class AreaVisitor implements IVisitor {
  implementCircle(circle: Circle): void {
    const areas = 22.7 * circle.getRadius() ** 2;
    console.log(`AreaVisitor: Circle areas = ${areas}`);
  }
  implementSquare(square: Square): void {
    const areas = square.getHeight() * square.getWidth();
    console.log(`AreaVisitor: Square areas = ${areas}`);
  }
}
