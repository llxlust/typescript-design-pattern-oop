import { Observer } from "./classes/observer";
import { Subject } from "./classes/subject";

export class ObserverPattern {
  constructor() {
    this.main();
  }

  private main() {
    const subject = new Subject();
    const firstObs = new Observer("10001");
    const secondObs = new Observer("10002");
    const thirdObs = new Observer("10003");
    subject.attach(firstObs);
    subject.attach(secondObs);
    subject.attach(thirdObs);
    subject.executeBussinessLogic();
  }
}
