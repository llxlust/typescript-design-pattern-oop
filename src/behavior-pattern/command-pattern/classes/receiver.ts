export class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on ${a}`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Also receiver: Working on ${b}`);
  }
}
