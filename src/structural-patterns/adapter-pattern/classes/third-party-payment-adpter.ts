import { ThirdPartyPayment } from "./third-party-payment";
import { IPaymentProcesser } from "./payment.interface";
export class ThirdPartyPaymentAdapter implements IPaymentProcesser {
  payment: ThirdPartyPayment;
  constructor(thirdPartyPayment: ThirdPartyPayment) {
    this.payment = thirdPartyPayment;
  }
  public pay(amount: number): void {
    this.payment.processPayment(amount);
  }
}
