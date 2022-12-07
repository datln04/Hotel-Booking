import { call, delay, put, takeLatest } from "redux-saga/effects";
import HotelService from "../../services/HotelService";
import { DISPLAY_LOADING } from "../../util/common/LoadingConstant";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import * as actions from "../actions/HotelServiceAction";

function* getHotelById(action) {
  try {
    yield delay(2000);
    let listService = yield call(() => {
      return HotelService.getHotelServiceById(action.payload);
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getHotelServiceById.getHotelServiceByIdSuccess(listService.data)
      );
    }
  } catch (error) {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield put(actions.getHotelServiceById.getHotelServiceByIdFailure(error));
  }
}

export function* followActionGetHotelById() {
  yield takeLatest(
    actions.getHotelServiceById.getHotelServiceByIdRequest,
    getHotelById
  );
}
