import { Circle } from "./circle";
import { Square } from "./square";

export interface IVisitor {
  implementCircle(shape: Circle): void;
  implementSquare(shape: Square): void;
}
