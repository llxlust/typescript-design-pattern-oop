import { IObserver } from "./observer.interface";
import { ISubject } from "./subject.interface";

export class Subject implements ISubject {
  private observerList: IObserver[] = [];
  attach(observer: IObserver): void {
    if (this.observerList.includes(observer)) {
      console.log(`This observer already in list.`);
      return;
    }
    this.observerList.push(observer);
  }
  detach(observer: IObserver): void {
    const index = this.observerList.indexOf(observer);
    if (index === -1) {
      console.log(`Subject: This observer is not in list.`);
      return;
    }
    this.observerList.splice(index, 1);
    console.log(`Subject: Observer has remove from list.`);
  }

  executeBussinessLogic(): void {
    console.log(`Subject: Implementing bussiness logic.`);
    this.notify();
  }
  notify(): void {
    for (const observer of this.observerList) {
      observer.update(this);
    }
  }
}
