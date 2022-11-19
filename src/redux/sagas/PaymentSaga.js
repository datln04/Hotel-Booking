import { call, delay, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions/PaymentAction";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../util/common/LoadingConstant";
import PaymentService from "../../services/PaymentService";

function* getPaymentWithMoMo(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let listService = yield call(() => {
      return PaymentService.getPaymentWithMoMo(action.payload);
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getPaymentWithMoMo.getPaymentWithMoMoSuccess(listService.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.getPaymentWithMoMo.getPaymentWithMoMoFailure(error));
  }
}

function* getPaymentWithVNPay(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let listService = yield call(() => {
      return PaymentService.getPaymentWithVNPay(action.payload);
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getPaymentWithVNPay.getPaymentWithVNPaySuccess(listService.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.getPaymentWithVNPay.getPaymentWithVNPayFailure(error));
  }
}

export function* followActionGetPaymentWithMoMo() {
  yield takeLatest(
    actions.getPaymentWithMoMo.getPaymentWithMoMoRequest,
    getPaymentWithMoMo
  );
}

export function* followActionGetPaymentWithVNPay() {
  yield takeLatest(
    actions.getPaymentWithVNPay.getPaymentWithVNPayRequest,
    getPaymentWithVNPay
  );
}
