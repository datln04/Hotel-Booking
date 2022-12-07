import { call, delay, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import ImageService from "../../services/ImageService";
import * as actions from "../actions/ImageAction";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../util/common/LoadingConstant";

function* getImageByTypeContains(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(2000);
    let listService = yield call(() => {
      return ImageService.getImageByTypeContains(action.payload);
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getImageByTypeContains.getImageByTypeContainsSuccess(
          listService.data
        )
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(
      actions.getImageByTypeContains.getImageByTypeContainsFailure(error)
    );
  }
}

export function* followActionGetImageByTypeContains() {
  yield takeLatest(
    actions.getImageByTypeContains.getImageByTypeContainsRequest,
    getImageByTypeContains
  );
}
