import { call, delay, put, takeLatest } from "redux-saga/effects";
import AbstractionService from "../../services/AbstractionService";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../util/common/LoadingConstant";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import * as actions from "../actions/AbstractionActions";

function* getAllAbstraction() {
  try {
    yield delay(1000);
    yield put({
      type: DISPLAY_LOADING,
    });
    let listService = yield call(() => {
      return AbstractionService.getAllAbstraction();
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getAllAbstraction.getAllAbstractionSuccess(listService.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.getAllAbstraction.getAllAbstractionFailure(error));
  }
}

export function* followActionGetAllAbstraction() {
  yield takeLatest(
    actions.getAllAbstraction.getAllAbstractionRequest,
    getAllAbstraction
  );
}
