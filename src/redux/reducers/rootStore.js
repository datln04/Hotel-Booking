import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
import HotelReducer from "./HotelReducer";
import RoomTypeReducer from "./RoomTypeReducer";
import ServiceCategoryReducer from "./ServiceCategory";
import ServiceCategoryDetailReducer from "./ServiceCategoryDetail";
import RoomAvailabilityReducer from "./RoomAvailabilityReducer";
import ServiceByCategoryIdReducer from "./ServiceReducer";
import SpecialUtilityReducer from "./SpecialUtilityReducer";
import { PaymentMoMoReducer, PaymentVNPayReducer } from "./PaymentReducer";

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
  PaymentVNPayReducer,
});
