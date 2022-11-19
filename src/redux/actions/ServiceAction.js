import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getAllServiceByCategoryId = createActions({
  getServiceByCategoryIdRequest: (payload) => payload,
  getServiceByCategoryIdSuccess: (payload) => payload,
  getServiceByCategoryIdFailure: (err) => err,
});
