import { WindowButton } from "../../abstract-factory-pattern/classes/ui-components/window/window-button";
import { IButton } from "../interfaces/button.interface";
import { Dialog } from "./dialog";
import { WebButton } from "./web-button";

export class WindowDialog extends Dialog {
  constructor() {
    super();
  }
  createButton(): IButton {
    return new WindowButton();
  }
}
