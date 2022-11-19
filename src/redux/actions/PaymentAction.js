import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getPaymentWithMoMo = createActions({
  getPaymentWithMoMoRequest: (payload) => payload,
  getPaymentWithMoMoSuccess: (payload) => payload,
  getPaymentWithMoMoFailure: (err) => err,
});

export const getPaymentWithVNPay = createActions({
  getPaymentWithVNPayRequest: (payload) => payload,
  getPaymentWithVNPaySuccess: (payload) => payload,
  getPaymentWithVNPayFailure: (err) => err,
  removePaymentWithVNPay: undefined,
});
