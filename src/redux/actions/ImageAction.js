import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getImageByTypeContains = createActions({
  getImageByTypeContainsRequest: (payload) => payload,
  getImageByTypeContainsSuccess: (payload) => payload,
  getImageByTypeContainsFailure: (err) => err,
});
