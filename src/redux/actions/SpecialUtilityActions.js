import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getSpecialUtility = createActions({
  getSpecialUtilityRequest: undefined,
  getSpecialUtilitySuccess: (payload) => payload,
  getSpecialUtilityFailure: (err) => err,
});
