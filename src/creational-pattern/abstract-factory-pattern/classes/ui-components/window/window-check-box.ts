import { CheckBox } from "../../../interfaces/ui.interface";

export class WindowCheckBox implements CheckBox {
  constructor() {}
  check() {
    console.log("Window check box checking...");
  }
}
