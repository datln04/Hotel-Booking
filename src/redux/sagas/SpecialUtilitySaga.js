import { call, delay, put, takeLatest } from "redux-saga/effects";
import SpecialUtilityService from "../../services/SpecialUtilityService";
import { DISPLAY_LOADING } from "../../util/common/LoadingConstant";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import * as actions from "../actions/SpecialUtilityActions";

function* getAllSpecialUtility() {
  try {
    yield delay(1000);
    let listService = yield call(() => {
      return SpecialUtilityService.getAllSpecialUtilityService();
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getSpecialUtility.getSpecialUtilitySuccess(listService.data)
      );
    }
  } catch (error) {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield put(actions.getSpecialUtility.getSpecialUtilityFailure(error));
  }
}

export function* followActionGetAllSpecialUtility() {
  yield takeLatest(
    actions.getSpecialUtility.getSpecialUtilityRequest,
    getAllSpecialUtility
  );
}
