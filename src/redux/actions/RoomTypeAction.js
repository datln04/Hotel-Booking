import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getRoomType = createActions({
  getRoomTypeRequest: undefined,
  getRoomTypeSuccess: (payload) => payload,
  getRoomTypeFailure: (err) => err,
});
