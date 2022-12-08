import { call, delay, put, takeLatest } from "redux-saga/effects";
import NewsService from "../../services/NewsService";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../util/common/LoadingConstant";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import * as actions from "../actions/NewsAction";

function* getAllNews() {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(2000);
    let listService = yield call(() => {
      return NewsService.getAllNews();
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(actions.getAllNews.getAllNewsSuccess(listService.data));
    }
  } catch (error) {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield put(actions.getAllNews.getAllNewsFailure(error));
  } finally {
    yield put({
      type: HIDE_LOADING,
    });
  }
}

export function* followActionGetAllNews() {
  yield takeLatest(actions.getAllNews.getAllNewsRequest, getAllNews);
}

function* updateNewsEvent(payload) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(2000);
    let listService = yield call(() => {
      return NewsService.updateNewsEvent(payload);
    });
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(
        actions.updateNewsEvent.updateNewsEventSuccess(listService.data)
      );
    }
  } catch (error) {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield put(actions.updateNewsEvent.updateNewsEventFailure(error));
  } finally {
    yield put({
      type: HIDE_LOADING,
    });
  }
}

export function* followActionUpdateNewsEvent() {
  yield takeLatest(
    actions.updateNewsEvent.updateNewsEventRequest,
    updateNewsEvent
  );
}
