import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getServiceCategory = createActions({
  getServiceCategoryRequest: (payload) => payload,
  getServiceCategorySuccess: (payload) => payload,
  getServiceCategoryFailure: (err) => err,
});

export const getServiceCategoryById = createActions({
  getServiceCategoryByIdRequest: (payload) => payload,
  getServiceCategoryByIdSuccess: (payload) => payload,
  getServiceCategoryByIdFailure: (err) => err,
});
