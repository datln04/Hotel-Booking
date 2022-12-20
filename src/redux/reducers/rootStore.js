import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
import HotelReducer from "./HotelReducer";
import RoomTypeReducer from "./RoomTypeReducer";
import ServiceCategoryReducer from "./ServiceCategory";
import ServiceCategoryDetailReducer from "./ServiceCategoryDetail";
import RoomAvailabilityReducer from "./RoomAvailabilityReducer";
import ServiceByCategoryIdReducer from "./ServiceReducer";
import SpecialUtilityReducer from "./SpecialUtilityReducer";
import ImageReducer from "./ImageReducer";
import NewsReducer from "./NewsReducer";
import AbstractionReducer from "./AbstractionReducer";

import {
  PaymentMoMoReducer,
  PaymentVNPayReducer,
  PaymentVnPayConfirmReducer,
  PaymentMoMoConfirmReducer,
} from "./PaymentReducer";

export default combineReducers({
  HotelReducer,
  LoadingReducer,
  RoomTypeReducer,
  ServiceCategoryReducer,
  ServiceCategoryDetailReducer,
  RoomAvailabilityReducer,
  ServiceByCategoryIdReducer,
  SpecialUtilityReducer,
  PaymentMoMoReducer,
  PaymentMoMoConfirmReducer,
  PaymentVNPayReducer,
  PaymentVnPayConfirmReducer,
  ImageReducer,
  NewsReducer,
  AbstractionReducer,
});
