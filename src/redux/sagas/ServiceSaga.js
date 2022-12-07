import { call, delay, put, takeLatest } from "redux-saga/effects";
import Service from "../../services/Service";
import { DISPLAY_LOADING } from "../../util/common/LoadingConstant";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import * as actions from "../actions/ServiceAction";

function* getAllServiceByCategory(action) {
  try {
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
  } catch (error) {
    yield put({
      type: DISPLAY_LOADING,
    });
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
