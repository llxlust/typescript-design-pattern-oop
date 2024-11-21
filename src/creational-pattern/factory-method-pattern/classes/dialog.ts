import { IButton } from "../interfaces/button.interface";

export abstract class Dialog {
  abstract createButton(): IButton;

  public triggerDialog(): void {
    const button: IButton = this.createButton();
    button.onClick();
    button.render();
  }
}
