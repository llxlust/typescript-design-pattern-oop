import { IComponent } from "./component.interface";

export class Component implements IComponent {
  public operation(): string {
    return "Concreate Components";
  }
}
