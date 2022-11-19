import { call, delay, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import RoomAvailability from "../../services/RoomAvailabilityService";
import * as actions from "../actions/RoomAvailability";
import { STATUS_CODE } from "../../util/constant/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../util/common/LoadingConstant";

function* getAllRoomAvailability(action) {
    try {
        yield put({
            type: DISPLAY_LOADING,
        });
        yield delay(2000);
        let listService = yield call(() => {
            return RoomAvailability.getAllRoomAvailabilityService(action.payload);
        });
        if (listService.status === STATUS_CODE.SUCCESS) {
            yield put(actions.getRoomAvailability.getRoomAvailabilitySuccess(listService.data));
        }
        yield put({
            type: HIDE_LOADING,
        });
    } catch (error) {
        yield put(actions.getRoomAvailability.getRoomAvailabilityFailure(error));
    }
}

export function* followActionGetAllRoomAvailability() {
    yield takeLatest(
        actions.getRoomAvailability.getRoomAvailabilityRequest,
        getAllRoomAvailability
    );
}
