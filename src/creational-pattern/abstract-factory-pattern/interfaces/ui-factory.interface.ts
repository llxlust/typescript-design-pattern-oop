import { Button, CheckBox } from "./ui.interface";

export interface IUiFactory {
  createButton: () => Button;
  createCheckBox: () => CheckBox;
}
