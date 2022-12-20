import {
  getPaymentWithMoMo,
  getPaymentWithVNPay,
  getPaymentVnPayConfirm,
  getType,
  getPaymentWithMoMoConfirm,
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
    case getType(getPaymentWithMoMo.removePaymentWithMoMo):
      return {
        ...state,
        arrPayment: {},
        isLoading: false,
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
        arrPayment: {},
        isLoading: false,
      };
    default:
      return state;
  }
}

export function PaymentVnPayConfirmReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getPaymentVnPayConfirm.getPaymentVnPayConfirmRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPaymentVnPayConfirm.getPaymentVnPayConfirmSuccess):
      return {
        ...state,
        arrPayment: action.payload,
        isLoading: false,
      };
    case getType(getPaymentVnPayConfirm.getPaymentVnPayConfirmFailure):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPaymentVnPayConfirm.removePaymentVnPayConfirm):
      return {
        ...state,
        arrPayment: 1,
        isLoading: false,
      };
    case getType(getPaymentVnPayConfirm.clearPaymentVNPayConfirm):
      return {
        ...state,
        arrPayment: {},
        isLoading: false,
      };
    default:
      return state;
  }
}

export function PaymentMoMoConfirmReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getPaymentWithMoMoConfirm.getPaymentWithMoMoConfirmRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPaymentWithMoMoConfirm.getPaymentWithMoMoConfirmSuccess):
      return {
        ...state,
        arrPayment: action.payload,
        isLoading: false,
      };
    case getType(getPaymentWithMoMoConfirm.getPaymentWithMoMoConfirmFailure):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPaymentWithMoMoConfirm.removePaymentWithMoMoConfirm):
      return {
        ...state,
        arrPayment: 1,
        isLoading: false,
      };
    default:
      return state;
  }
}
