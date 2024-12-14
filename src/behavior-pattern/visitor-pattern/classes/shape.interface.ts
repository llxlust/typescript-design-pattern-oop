import { IVisitor } from "./visitor.interface";

export interface IShape {
  accept(visitor: IVisitor): void;
}
