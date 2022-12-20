import { all } from "redux-saga/effects";
import * as hotelServiceSaga from "./HotelServiceSaga";
import * as roomTypeSaga from "./RoomTypeSaga";
import * as serviceCategorySaga from "./ServiceCategorySaga";
import * as roomAvailabilitySaga from "./RoomAvailabilitySaga";
import * as serviceSaga from "./ServiceSaga";
import * as getAllSpecialUtility from "./SpecialUtilitySaga";
import * as paymentSaga from "./PaymentSaga";
import * as ImageSaga from "./ImageSaga";
import * as NewsSaga from "./NewsSaga";
import * as AbstractionSaga from "./AbstractionSaga";

export default function* rootSaga() {
  yield all([
    hotelServiceSaga.followActionGetHotelById(),
    roomTypeSaga.followActionGetAllRoomType(),
    serviceCategorySaga.followActionGetAllHotelService(),
    serviceCategorySaga.followActionGetServiceDetail(),
    roomAvailabilitySaga.followActionGetAllRoomAvailability(),
    serviceSaga.followActionGetAllServiceByCategoryId(),
    getAllSpecialUtility.followActionGetAllSpecialUtility(),
    paymentSaga.followActionGetPaymentWithMoMo(),
    paymentSaga.followActionGetPaymentMoMoConfirm(),
    paymentSaga.followActionGetPaymentWithVNPay(),
    paymentSaga.followActionGetPaymentVnPayConfirm(),
    ImageSaga.followActionGetImageByTypeContains(),
    NewsSaga.followActionGetAllNews(),
    NewsSaga.followActionUpdateNewsEvent(),
    AbstractionSaga.followActionGetAllAbstraction(),
  ]);
}
