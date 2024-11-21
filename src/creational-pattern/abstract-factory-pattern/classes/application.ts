import { IUiFactory } from "../interfaces/ui-factory.interface";
import { Button, CheckBox } from "../interfaces/ui.interface";

export class Application {
  private button: Button;
  private checkBox: CheckBox;
  constructor(factory: IUiFactory) {
    this.button = factory.createButton();
    this.checkBox = factory.createCheckBox();
  }

  public render() {
    this.button.render();
    this.checkBox.check();
  }
}
