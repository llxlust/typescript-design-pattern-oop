import { IButton } from "../interfaces/button.interface";

export class WebButton implements IButton {
  constructor() {}
  render() {
    console.log(`Web button is rendering...`);
  }

  onClick() {
    console.log(`Web button is clicking...`);
  }
}
