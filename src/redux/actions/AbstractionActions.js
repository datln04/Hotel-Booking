import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getAllAbstraction = createActions({
  getAllAbstractionRequest: undefined,
  getAllAbstractionSuccess: (payload) => payload,
  getAllAbstractionFailure: (err) => err,
});
