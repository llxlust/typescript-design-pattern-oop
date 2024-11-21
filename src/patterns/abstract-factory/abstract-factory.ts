import { Application } from "./classes/application";
import { MacosFactory } from "./classes/factories/macos-ui-factory";
import { WindowFactory } from "./classes/factories/widow-ui-factory";
import { IUiFactory } from "./interfaces/ui-factory.interface";

export class AbstractFactory {
  os: string = "";
  factory;
  constructor(operator: string) {
    if (operator === "macos") {
      this.factory = new MacosFactory();
    } else {
      this.factory = new WindowFactory();
    }
    this.main();
  }

  private main() {
    const App: Application = new Application(this.factory);
    App.render();
  }
}
