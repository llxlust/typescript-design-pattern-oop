import { NotifyEventType } from "./notify.enum";

export interface IMediator {
  notify(sender: Object, event: NotifyEventType): void;
}
