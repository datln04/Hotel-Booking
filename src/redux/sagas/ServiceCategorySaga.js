import { call, delay, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions/ServiceCategoryAction";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../util/common/LoadingConstant";
import { serviceCategory } from "../../services/ServiceCategory";

function* getAllServiceCategory(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let listService = yield call(() => {
      return serviceCategory.getAllServiceCategory(action.payload);
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getServiceCategory.getServiceCategorySuccess(listService.data)
      );
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.getServiceCategory.getServiceCategoryFailure(error));
  }
}
function* getServiceCategoryById(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1000);
    let service = yield call(() => {
      return serviceCategory.getServiceCategoryById(action.payload);
    });
    if (service.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.getServiceCategoryById.getServiceCategoryByIdSuccess(service.data)
      )
    }
    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    yield put(actions.getServiceCategoryById.getServiceCategoryByIdFailure(error))
  }
}
export function* followActionGetAllHotelService() {
  yield takeLatest(
    actions.getServiceCategory.getServiceCategoryRequest,
    getAllServiceCategory
  );
}
export function* followActionGetServiceDetail() {
  yield takeLatest(
    actions.getServiceCategoryById.getServiceCategoryByIdRequest,
    getServiceCategoryById
  );

}
