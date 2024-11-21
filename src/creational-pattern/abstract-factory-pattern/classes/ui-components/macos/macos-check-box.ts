import { CheckBox } from "../../../interfaces/ui.interface";

export class MacosCheckBox implements CheckBox {
  constructor() {}
  check() {
    console.log("Macos chekc box checking...");
  }
}
