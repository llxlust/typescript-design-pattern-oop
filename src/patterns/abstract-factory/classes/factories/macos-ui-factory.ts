import { IUiFactory } from "../../interfaces/ui-factory.interface";
import { MacosButton } from "../ui-components/macos/macos-button";
import { MacosCheckBox } from "../ui-components/macos/macos-check-box";

export class MacosFactory implements IUiFactory {
  constructor() {}
  createButton() {
    return new MacosButton();
  }

  createCheckBox() {
    return new MacosCheckBox();
  }
}
