import { call, delay, put, takeLatest } from "redux-saga/effects";
import { roomTypeService } from "../../services/RoomTypeService";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../util/common/LoadingConstant";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import * as actions from "../actions/RoomTypeAction";

function* getAllRoomType() {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(2000);
    let listRoomType = yield call(() => {
      return roomTypeService.getAllRoomType();
    });
    if (listRoomType.status === STATUS_CODE.SUCCESS) {
      yield put(actions.getRoomType.getRoomTypeSuccess(listRoomType.data));
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.getRoomType.getRoomTypeFailure(error));
  }
}
export function* followActionGetAllRoomType() {
  yield takeLatest(actions.getRoomType.getRoomTypeRequest, getAllRoomType);
}
