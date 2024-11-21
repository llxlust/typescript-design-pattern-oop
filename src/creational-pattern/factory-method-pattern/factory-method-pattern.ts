import { Dialog } from "./classes/dialog";
import { WebDialog } from "./classes/web-dialog";
import { WindowDialog } from "./classes/window-dialog";

export class FactoryMethod {
  constructor() {
    this.main();
  }
  private main(): void {
    let dialog: Dialog;
    const os = "window";
    if (os === "window") {
      dialog = new WindowDialog();
    } else {
      dialog = new WebDialog();
    }
    dialog.triggerDialog();
  }
}
