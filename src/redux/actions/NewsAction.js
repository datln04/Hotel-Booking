import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getAllNews = createActions({
  getAllNewsRequest: undefined,
  getAllNewsSuccess: (payload) => payload,
  getAllNewsFailure: (err) => err,
});

export const updateNewsEvent = createActions({
  updateNewsEventRequest: (payload) => payload,
  updateNewsEventSuccess: (payload) => payload,
  updateNewsEventFailure: (err) => err,
});
