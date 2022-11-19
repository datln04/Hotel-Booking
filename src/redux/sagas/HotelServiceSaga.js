import { call, delay, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import HotelService from "../../services/HotelService";
import * as actions from "../actions/HotelServiceAction";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../util/common/LoadingConstant";

function* getHotelById(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(2000);
    let listService = yield call(() => {
      return HotelService.getHotelServiceById(action.payload);
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getHotelServiceById.getHotelServiceByIdSuccess(listService.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.getHotelServiceById.getHotelServiceByIdFailure(error));
  }
}

export function* followActionGetHotelById() {
  yield takeLatest(
    actions.getHotelServiceById.getHotelServiceByIdRequest,
    getHotelById
  );
}
