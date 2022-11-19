import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
    return reduxAction().type;
};
export const getRoomAvailability = createActions({
    getRoomAvailabilityRequest: (payload) => payload,
    getRoomAvailabilitySuccess: (payload) => payload,
    getRoomAvailabilityFailure: (err) => err,
});