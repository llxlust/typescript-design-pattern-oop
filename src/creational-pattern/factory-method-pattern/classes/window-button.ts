import { IButton } from "../interfaces/button.interface";

export class Window implements IButton {
  constructor() {}
  render() {
    console.log(`Window button is rendering...`);
  }

  onClick() {
    console.log(`Window button is clicking...`);
  }
}
