import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getAllService = createActions({
  getAllServiceRequest: undefined,
  getAllServiceSuccess: (payload) => payload,
  getAllServiceFailure: (err) => err,
});

export const getServiceCategoryById = createActions({
  getServiceCategoryByIdRequest: (payload) => payload,
  getServiceCategoryByIdSuccess: (payload) => payload,
  getServiceCategoryByIdFailure: (err) => err,
});
