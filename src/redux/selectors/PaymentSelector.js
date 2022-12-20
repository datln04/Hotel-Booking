export const PaymentWithMoMoState$ = (state) =>
  state.PaymentMoMoReducer.arrPayment;

export const PaymentWithVNPayState$ = (state) =>
  state.PaymentVNPayReducer.arrPayment;

export const PaymentVnPayConfirmState$ = (state) =>
  state.PaymentVnPayConfirmReducer.arrPayment;

export const PaymentMoMoConfirmState$ = (state) =>
  state.PaymentMoMoConfirmReducer.arrPayment;
