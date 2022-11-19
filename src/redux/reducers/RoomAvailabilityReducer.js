import { getRoomAvailability, getType } from "../actions/RoomAvailability";
const initialState = {
    arrRoomAvailability: [],
    isLoading: true,
};

export default function RoomAvailabilityReducer(state = initialState, action) {
    switch (action.type) {
        case getType(getRoomAvailability.getRoomAvailabilityRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getRoomAvailability.getRoomAvailabilitySuccess):
            return {
                ...state,
                isLoading: false,
                arrRoomAvailability: action.payload,
            };
        case getType(getRoomAvailability.getRoomAvailabilityFailure):
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
}
