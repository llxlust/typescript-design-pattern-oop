import { Component } from "./components";

export class Composite extends Component {
  protected children: Component[] = [];
  public add(component: Component): void {
    this.children.push(component);
  }
  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.slice(componentIndex, 1);
  }
  public isComposite(): boolean {
    return true;
  }
  public operation(): string {
    const result = [];
    for (const child of this.children) {
      result.push(child.operation());
    }
    return `Branch(${result.join("+")})`;
  }
}
