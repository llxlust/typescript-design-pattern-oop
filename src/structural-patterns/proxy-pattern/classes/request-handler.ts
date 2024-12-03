import { ISubject } from "./subject.interface";

export class RequestHandler implements ISubject {
  private method: "GET" | "POST";
  constructor(method: "GET" | "POST") {
    this.method = method;
  }

  execute(): void {
    console.log(`Subject currently handling ${this.method}`);
  }
}
