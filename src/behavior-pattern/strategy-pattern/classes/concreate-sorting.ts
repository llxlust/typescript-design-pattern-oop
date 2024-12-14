import { IStrategy } from "./strategy.interface";

export class ConcreateSorting implements IStrategy {
  doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}
