export interface IPaymentProcesser {
  pay(amount: number): void;
}
