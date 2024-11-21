import { IButton } from "../interfaces/button.interface";
import { Dialog } from "./dialog";
import { WebButton } from "./web-button";

export class WebDialog extends Dialog {
  constructor() {
    super();
  }
  createButton(): IButton {
    return new WebButton();
  }
}
