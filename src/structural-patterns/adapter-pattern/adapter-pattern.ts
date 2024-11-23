import { ThirdPartyPayment } from "./classes/third-party-payment";
import { ThirdPartyPaymentAdapter } from "./classes/third-party-payment-adpter";

export class AdapterPattern {
  constructor() {
    this.main();
  }

  private main(): void {
    const thirdPartyPayment = new ThirdPartyPayment();
    const thirdPartyPaymentAdapter = new ThirdPartyPaymentAdapter(
      thirdPartyPayment
    );
    thirdPartyPaymentAdapter.pay(500);
  }
}
