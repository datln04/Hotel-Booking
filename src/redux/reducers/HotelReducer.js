import { getType, getHotelServiceById } from "../actions/HotelServiceAction";

const initialState = {
  hotel: {},
  isLoading: true,
};

export default function HotelReducer(state = initialState, action) {
  switch (action.type) {
    case getType(getHotelServiceById.getHotelServiceByIdRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getHotelServiceById.getHotelServiceByIdSuccess):
      return {
        ...state,
        isLoading: false,
        hotel: action.payload,
      };
    case getType(getHotelServiceById.getHotelServiceByIdFailure):
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
