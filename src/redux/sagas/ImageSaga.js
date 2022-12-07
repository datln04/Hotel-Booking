import { call, delay, put, takeLatest } from "redux-saga/effects";
import ImageService from "../../services/ImageService";
import { DISPLAY_LOADING } from "../../util/common/LoadingConstant";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import * as actions from "../actions/ImageAction";

function* getImageByTypeContains(action) {
  try {
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
  } catch (error) {
    yield put({
      type: DISPLAY_LOADING,
    });
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
