import {
  getPaymentWithMoMo,
  getPaymentWithVNPay,
  getType,
} from "../actions/PaymentAction";

const initialState = {
  arrPayment: {},
  isLoading: true,
};

export function PaymentMoMoReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getPaymentWithMoMo.getPaymentWithMoMoRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPaymentWithMoMo.getPaymentWithMoMoSuccess):
      return {
        ...state,
        arrPayment: action.payload,
        isLoading: false,
      };
    case getType(getPaymentWithMoMo.getPaymentWithMoMoFailure):
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

export function PaymentVNPayReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getPaymentWithVNPay.getPaymentWithVNPayRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPaymentWithVNPay.getPaymentWithVNPaySuccess):
      return {
        ...state,
        arrPayment: action.payload,
        isLoading: false,
      };
    case getType(getPaymentWithVNPay.getPaymentWithVNPayFailure):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPaymentWithVNPay.removePaymentWithVNPay):
      return {
        ...state,
        arrPayment: [],
        isLoading: false,
      };
    default:
      return state;
  }
}
