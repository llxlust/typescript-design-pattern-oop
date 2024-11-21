import { IUiFactory } from "../../interfaces/ui-factory.interface";
import { Button } from "../../interfaces/ui.interface";
import { WindowButton } from "../ui-components/window/window-button";
import { WindowCheckBox } from "../ui-components/window/window-check-box";

export class WindowFactory implements IUiFactory {
  constructor() {}
  createButton() {
    return new WindowButton();
  }

  createCheckBox() {
    return new WindowCheckBox();
  }
}
