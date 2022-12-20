import { BaseServices } from "./BaseService";

class PaymentService extends BaseServices {
  getPaymentWithMoMo = (payload) => {
    return this.post("v1/momo", payload);
  };
  getPaymentWithMoMoConfirm = (payload) => {
    return this.get(
      `v1/MomoConfirm?partnerCode=${payload.partnerCode}&orderId=${payload.orderId}&requestId=${payload.requestId}&amount=${payload.amount}&orderInfo=${payload.orderInfo}&orderType=${payload.orderType}&transId=${payload.transId}&resultCode=${payload.resultCode}&message=${payload.message}&payType=${payload.payType}&responseTime=${payload.responseTime}&extraData=${payload.extraData}&signature=${payload.signature}`
    );
  };
  getPaymentWithVNPay = (payload) => {
    return this.post("v1/vnpay", payload);
  };
  getPaymentVnPayConfirm = (payload) => {
    return this.post("v1/VnPayConfirm", payload);
  };
}

export default PaymentService = new PaymentService();
