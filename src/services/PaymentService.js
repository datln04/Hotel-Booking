import { BaseServices } from "./BaseService";

class PaymentService extends BaseServices {
  getPaymentWithMoMo = (payload) => {
    return this.post(`v1/momo?${payload}`);
  };
  getPaymentWithVNPay = (payload) => {
    return this.post("v1/vnpay", payload);
  };
  getPaymentVnPayConfirm = (payload) => {
    return this.post("v1/VnPayConfirm", payload);
  };
}

export default PaymentService = new PaymentService();
