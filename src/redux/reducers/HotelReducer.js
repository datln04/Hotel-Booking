import { getType, getHotelServiceById } from "../actions/HotelServiceAction";

const initialState = {
  hotel: {},
};

export default function HotelReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getHotelServiceById.getHotelServiceByIdRequest):
      return {
        ...state,
      };
    case getType(getHotelServiceById.getHotelServiceByIdSuccess):
      return {
        ...state,
        hotel: action.payload,
      };
    case getType(getHotelServiceById.getHotelServiceByIdFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
