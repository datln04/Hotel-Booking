import { call, delay, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import Service from "../../services/Service";
import * as actions from "../actions/ServiceAction";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../util/common/LoadingConstant";

function* getAllServiceByCategory(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(2000);
    let listService = yield call(() => {
      return Service.getAllServiceByCategoryId(action.payload);
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getAllServiceByCategoryId.getServiceByCategoryIdSuccess(
          listService.data
        )
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(
      actions.getAllServiceByCategoryId.getServiceByCategoryIdFailure(error)
    );
  }
}

export function* followActionGetAllServiceByCategoryId() {
  yield takeLatest(
    actions.getAllServiceByCategoryId.getServiceByCategoryIdRequest,
    getAllServiceByCategory
  );
}
