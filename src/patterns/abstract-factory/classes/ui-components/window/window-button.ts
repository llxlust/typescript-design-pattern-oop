import { Button } from "../../../interfaces/ui.interface";

export class WindowButton implements Button {
  constructor() {}
  render() {
    console.log(`Window button rendering...`);
  }
}
