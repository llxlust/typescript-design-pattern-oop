import { IStrategy } from "./strategy.interface";

export class Conctext {
  private strategy: IStrategy;
  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public doSomeBussinessLogic(): void {
    console.log(`Context: Implementing algorithm in strategy.`);
    const result = this.strategy.doAlgorithm(["A", "C", "E", "B", "Q", "H"]);
    console.log(result.join(","));
  }
}
