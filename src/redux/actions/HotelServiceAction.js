import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getHotelServiceById = createActions({
  getHotelServiceByIdRequest: (payload) => payload,
  getHotelServiceByIdSuccess: (payload) => payload,
  getHotelServiceByIdFailure: (err) => err,
});
