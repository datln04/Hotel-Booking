import { getRoomType } from "../actions/RoomTypeAction";
import { getType } from "../actions/HotelServiceAction";
const initialState = {
  arrRoomType: [],
  isLoading: true,
};

export default function RoomTypeReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getRoomType.getRoomTypeRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getRoomType.getRoomTypeSuccess):
      return {
        ...state,
        isLoading: false,
        arrRoomType: action.payload,
      };
    case getType(getRoomType.getRoomTypeFailure):
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
