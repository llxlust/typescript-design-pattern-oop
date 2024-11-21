import { IButton } from "../../../../factory-method-pattern/interfaces/button.interface";

export class WindowButton implements IButton {
  constructor() {}
  render() {
    console.log(`Window button rendering...`);
  }
  onClick() {
    console.log(`Window button click...`);
  }
}
