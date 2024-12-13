import { ISubject } from "./subject.interface";

export interface IObserver {
  update(subject: ISubject): void;
}
