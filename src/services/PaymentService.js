import { BaseServices } from "./BaseService";

class PaymentService extends BaseServices {
  getPaymentWithMoMo = (payload) => {
    return this.post(`v1/momo?${payload}`);
  };
  getPaymentWithVNPay = (payload) => {
    return this.post("v1/vnpay", payload);
  };
}

export default PaymentService = new PaymentService();
