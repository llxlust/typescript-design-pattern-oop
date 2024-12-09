import { DeveloperHandler } from "./classes/developer-handler";
import { MonkeyHandler } from "./classes/monkey-handler";
import { SquirrelHandler } from "./classes/squirrel-handler";

export class ChainPattern {
  constructor() {
    this.main();
  }

  private main() {
    const dev = new DeveloperHandler();
    const monkey = new MonkeyHandler();
    const squirrel = new SquirrelHandler();

    dev.setNext(monkey).setNext(squirrel);

    const foodList = ["banana", "coffee", "nut"];
    for (const food of foodList) {
      const result = dev.handle(food);
      if (result) {
        console.log(`${result}`);
      } else {
        console.log(`${food} was left untouched.`);
      }
    }
  }
}
