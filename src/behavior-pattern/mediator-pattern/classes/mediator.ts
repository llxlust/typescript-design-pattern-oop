import { IMediator } from "./mediator.interface";
import { NotifyEventType } from "./notify.enum";

export class Mediator implements IMediator {
  private componentA;
  private componentB;
  constructor(componentA: Object, componetB: Object) {
    this.componentA = componentA;
    this.componentB = componetB;
  }

  notify(sender: Object, event: NotifyEventType): void {}
}
