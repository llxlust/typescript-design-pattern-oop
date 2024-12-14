import { ConcreateReverse } from "./classes/concreate-reverse";
import { ConcreateSorting } from "./classes/concreate-sorting";
import { Conctext } from "./classes/context";

export class StrategyPattern {
  constructor() {
    this.main();
  }

  private main() {
    const reverseStrategy = new ConcreateReverse();
    const sortingStrategy = new ConcreateSorting();
    const context = new Conctext(reverseStrategy);
    context.doSomeBussinessLogic();
    context.setStrategy(sortingStrategy);
    context.doSomeBussinessLogic();
  }
}
