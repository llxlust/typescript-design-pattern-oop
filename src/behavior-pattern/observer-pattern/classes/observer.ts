import { IObserver } from "./observer.interface";
import { ISubject } from "./subject.interface";

export class Observer implements IObserver {
  private id: string;
  constructor(id: string) {
    this.id = id;
  }
  update(subject: ISubject): void {
    console.log(`Observer: ${this.id} is update state.`);
  }
}
