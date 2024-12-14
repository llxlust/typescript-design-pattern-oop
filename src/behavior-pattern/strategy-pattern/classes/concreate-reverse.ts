import { IStrategy } from "./strategy.interface";

export class ConcreateReverse implements IStrategy {
  doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}
