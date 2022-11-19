import { call, delay, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions/SpecialUtilityActions";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../util/common/LoadingConstant";
import SpecialUtilityService from "../../services/SpecialUtilityService";

function* getAllSpecialUtility() {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let listService = yield call(() => {
      return SpecialUtilityService.getAllSpecialUtilityService();
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getSpecialUtility.getSpecialUtilitySuccess(listService.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.getSpecialUtility.getSpecialUtilityFailure(error));
  }
}

export function* followActionGetAllSpecialUtility() {
  yield takeLatest(
    actions.getSpecialUtility.getSpecialUtilityRequest,
    getAllSpecialUtility
  );
}
