import { Component } from "./component";
import { IComponent } from "./component.interface";

export class Decorator implements IComponent {
  component: Component;
  constructor(component: Component) {
    this.component = component;
  }
  operation(): string {
    return this.component.operation();
  }
}
