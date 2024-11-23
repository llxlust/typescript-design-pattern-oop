export class ThirdPartyPayment {
  constructor() {}
  public processPayment(amount: number): void {
    console.log(`Process payment of ${amount}$`);
  }
}
