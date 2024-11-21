export class PrototypeObject {
  public primitive: any;
  constructor() {}

  public clone(): this {
    const clone = Object.create(this);
    return clone;
  }
}
